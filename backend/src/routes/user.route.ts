const express =require('express');
import { createUserService } from "../services/user.service";

const User = express.Router();
console.log("-------->>>>>>>")
User.post("/create",createUserService);

export default User;