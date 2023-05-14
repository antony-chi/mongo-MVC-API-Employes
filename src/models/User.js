import {Schema, mode, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {type: String, require:true},
    password: {type: String, requiere: true},
    role: String
});

//esportamos el modelo con nombre singular porque Mongoose lo convierte a plural automaticamente
export default model('User',userSchema)