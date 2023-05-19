import mongoose from 'mongoose';

export async function  connect(){

    try{
        await mongoose.connect("mongodb://localhost:27017/JWT-Aplication",{
            useNewUrlParser: true
        });
        console.log("database connected !!")
    }catch(error){
        console.log("Ocurrio un error en la conexion DB"+error)
    }
}