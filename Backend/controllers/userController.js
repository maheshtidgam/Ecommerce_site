import validator from "validator";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
// Route for user login
const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" })
        }
        const isMatch = await bycrypt.compare(password, user.password)
        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, message: "User logged in successfully", token })
        } else {
            res.status(400).json({ success: false, message: "Invalid password" })
            if (!isMatch) {
                return res.status(400).json({ success: false, message: "Invalid password" })
            }
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
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
    try {

        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            {
                const token = jwt.sign(email + password, process.env.JWT_SECRET)
                res.json({ success: true, message: "Admin logged in successfully", token })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}




export const getProfile = async (req, res) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        // Fetch user
        const user = await UserModel.findById(userId).select("name email createdAt");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({
            success: true,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};


export { loginUser, registerUser, adminLogin }