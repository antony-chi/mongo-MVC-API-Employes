import Employee from "../models/Employee.js";

export const createEmployee = async (req,res) => {
    const { name, email, ine, age, position} = req.body;
    const newEmployee = new Employee({
        name:name,
        email:email,
        ine: ine,
        age: age,
        position: position
    });

    try {
        await newEmployee.save();
        return res.json({code: 200, message: "The employee was a create in the DB!"})
    } catch (error) {
        return res.json({message: "We could not create the Employee please check your information"})
    }
}