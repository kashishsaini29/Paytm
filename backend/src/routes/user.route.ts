const express =require('express');
import { authenticateJWT } from "../middlewares/auth.middleware";
import { SignInService, createUserService, getUsersService, updateUserService } from "../services/user.service";

const User = express.Router();
User.post("/signup",createUserService);
User.post("/signin",authenticateJWT,SignInService);
User.put("/update",authenticateJWT,updateUserService);
User.get("/getusers",authenticateJWT,getUsersService);


export default User;