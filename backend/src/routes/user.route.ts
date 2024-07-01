const express =require('express');
import { authenticateJWT } from "../middlewares/auth.middleware";
import { SignInService, createUserService, updateUserService } from "../services/user.service";

const User = express.Router();
User.post("/signup",createUserService);
User.post("/signin",authenticateJWT,SignInService);
User.put("/update",authenticateJWT,updateUserService);

export default User;