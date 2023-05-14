//importamos el modelo y bcrypt para encriptar
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const signup = async (req, res) => {
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
    })
    await newUser.save();
    console.log(newUser)
    return true
}
