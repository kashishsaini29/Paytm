import mongoose from "mongoose";
import User,{users} from "./schemas/user.schema";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

const hashPassword = async (password:any) => {
  try {
    const saltRounds = process.env.SALT_ROUNDS;
    
    if (!saltRounds) {
      throw new Error('SALT_ROUNDS environment variable is not set');
    }
    
    const parsedSaltRounds = parseInt(saltRounds, 10);
    if (isNaN(parsedSaltRounds)) {
      throw new Error('Invalid salt rounds configuration');
    }
    const hashedPassword = await bcrypt.hash(password, parsedSaltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
};

export default hashPassword;


export async function createUser(data:users){
    try{
        const hashedPass = await hashPassword(data.password);
        console.log("hashed Pass", hashedPass);
        const user:any = await User.create(new User({
        name:data.name,
        username:data.username,
        lastname:data.lastname,
        password:hashedPass,
    }));
    const userId = user._id;
    const token = jwt.sign({
        userId
    },JWT_SECRET_KEY);
    return{
        status:"success",
        data:token
    }
    }catch(error){
        console.log("error creating user",error);
        return error
    }
}

export async function SignInRepo(req:any){
    try{
        const data = req.body;
        const {userId} = req;
        const hashPassword:any = await User.findById(new mongoose.Types.ObjectId(userId));
        
     const username=data.username;
     const password= data.password;

     const validUser:any= await bcrypt.compare(password,hashPassword.password);
     console.log("validUser->>>>", validUser);
     if(validUser){
        const result:any = await User.find();
        return{
            status:"success",
            data:result
        }
     }else{
        return {
            status:"error",
            data:[]
        }
     }    
    }catch(error){
        console.log("error in login user",error);
        return error
    }
}

export async function updateUser(data:any){
    try{
   
    }catch(error){
        console.log("error in update user profile",error);
        return error
    }
}