const express =require('express');
import { createUserService } from "../services/user.service";

const User = express.Router();
console.log("-------->>>>>>>")
User.post("/signup",createUserService);

export default User;