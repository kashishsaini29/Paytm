import mongoose, { Schema,Document } from "mongoose";

export interface users extends Document{
    name:string;
    lastname:string;
    username:string;
    password:string;
    // role:string;
    updatedAt?:string;
    createdAt?:string;
    deletedAt?:string;
    // permissions?:string[];
}

const UserSchema :Schema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    lastname:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin', 'user']
    },
    createdAt:{
        type:Date,
        default:new Date
    },
    updatedAt:{
        type:Date,
    },
    deletedAt:{
        type:Date
    },
    permissions:{
        type:[String]
    }
})

export default mongoose.model<users>("Users", UserSchema);