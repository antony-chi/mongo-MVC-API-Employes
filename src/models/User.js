import {Schema, mode, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {type: String, required:true},
    password: {type: String, requiered: true},
    role: String
});

//esportamos el modelo con nombre singular porque Mongoose lo convierte a plural automaticamente
export default model('User',userSchema)