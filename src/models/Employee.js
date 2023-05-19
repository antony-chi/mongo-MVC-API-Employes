import {Schema, model } from "mongoose";

const EmployeeSchema = new Schema({
    name: String,
    email: {type: String, required:true},
    ine: String,
    age: Number,
    position: String
});

//esportamos el modelo con nombre singular porque Mongoose lo convierte a plural automaticamente
export default model('Employee',EmployeeSchema)