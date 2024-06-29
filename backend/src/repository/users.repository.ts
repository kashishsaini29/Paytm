import mongoose from "mongoose";
import User,{users} from "./schemas/user.schema";

export async function createUser(data:users){
    try{
     
        const user = await User.create(new User({
        name:data.name,
        username:data.username,
        role:data.role,
        permissions:data.permissions
    }));
    return{
        status:"success",
        data:user._id
    }
    }catch(error){
        console.log("error creating user",error);
        return error
    }
}