//importamos el modelo y bcrypt para encriptar
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config.js';

export const signup = async (req, res) => {
    const {name, email, password } = req.body;
    //Encrypt Password antes de insert
    //hash es convertir el string a text encriptado Salt o saltos = 10 palabras random para mas seguridad
    // 123 = hash = 40dn30nsia9 + sboa03bc1lzl
    const encryptPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
        name:name,
        email:email,
        password: encryptPassword,
        role: "admin"
    });
    //console.log(newUser)
    try {
        await newUser.save();
        res.json({code:200, message:"The User was created in the BD"})
    } catch (error) {
        res.json({message:"we coold not create user please check your information"})
    }
    return true
}

export const login = async (req,res) => {
    const {email,password} = req.body;

    //Find the user email in the databse and verify if exists
    const findEmail =await User.find({email: email}).exec();
    console.log(findEmail)
    //si no existe enviar un mensaje de validadcion
    if(findEmail.length ===0){
        res.json({"code": 400, "menssage": "the email no exist!"})
    }else{
        //if it does verify the password
        console.log(bcrypt.compareSync(password, findEmail[0].password))
        
        if (password && bcrypt.compareSync(password,findEmail[0].password)){
            //Create JWT toke 
            const token = jwt.sign(
                //Payload informacion importante para el token
                {role: 'admin', id:findEmail[0]._id},
                //palabra secreta
                config.secret, 
                //expiracion en segundos
                {expiresIn: 180}
            )
            res.status(200).json({token})
        }else{
            //la contraseña no coincide
            res.status(400).json({"message": "the password does not match with the current email account!"})
        }

        }
    }


    //Create JWT and send in to the client