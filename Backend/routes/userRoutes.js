import express from "express";
import { registerUser, loginUser, adminLogin, getProfile } from "../controllers/userController.js";
const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/profile",  getProfile);
export default userRouter;