import  jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";
import {Request,Response, NextFunction } from "express";


declare module "express-serve-static-core" {
    interface Request {
      userId?: string;
    }
  }


export const authenticateJWT = (req: Request, res: Response,next: NextFunction) =>{
    try{
        const authHeader = req?.headers?.authorization;
     
        
        if(!authHeader || !authHeader.startsWith("Bearer") ){
            return res.status(403).json({
                    message:"Not Authorization Found"
                 });
        }
        const token = authHeader.split(" ")[1];
        const decodedToken:any =  jwt.verify(token,JWT_SECRET_KEY);
        if(decodedToken.userId){
            req["userId"]= decodedToken.userId
            next();
        }else{
            return res.status(403).json({
                message:"You are not Authorized"
             });
        }
    }catch(err){
        return res.status(403).json({
            message:err
        })
    }
}