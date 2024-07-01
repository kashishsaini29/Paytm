const express =require('express');
import { authenticateJWT } from "../middlewares/auth.middleware";
import { SignInService, createUserService } from "../services/user.service";

const User = express.Router();
User.post("/signup",createUserService);
User.post("/signin",authenticateJWT,SignInService);

export default User;