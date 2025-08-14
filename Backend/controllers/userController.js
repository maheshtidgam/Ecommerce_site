import validator from "validator";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
// Route for user login
const loginUser = async (req, res) => {

}


// Route for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        //checking user already exist or not
        const userExist = await UserModel.findOne({ email })
        if (userExist) {
            return res.status(400).json({ success: false, message: "User already exist" })
        }
        //validating email formzt & srrong pasword
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email" })
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" })
        }

        //Hashing user password 
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)
        const newUser = new UserModel({ name, email, password: hashedPassword })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, message: "User registered successfully", token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

// Route for admin login
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }