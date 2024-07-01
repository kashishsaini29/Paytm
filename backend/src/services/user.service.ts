import { Request, Response } from "express";
import  {SignInRepo, createUser} from '../repository/users.repository';
import { validationSchema } from "../validation/user.validator";
import User from "../repository/schemas/user.schema";


export async function createUserService(req: Request, res: Response){
 try{
    const data:any = req.body;
    const validateResponse:any = await validationSchema(data);
    if(validateResponse.message.status ==="error"){
      return res.status(401).json( {
       message: validateResponse.message,
       error:validateResponse.error.message.details[0].message
      })}
    const existingUser = await User.findOne({username:data.username});
    if(existingUser){
      return res.status(400).send({
        message:"User already exists"
      })
    }
  const result:any = await createUser(data);
  if(result.status ==="success"){
    return res.status(200).send({
        status:"success",
        data:result.data
    })
  }else{
    return res.status(400).send({
        status:result.status,
        data:result.data
    })
  }
 }catch(error:any){
    return res.status(500).send({
        message:"Error creating user",
        error:error.message
    })
 }
}

export async function SignInService(req:Request, res:Response){
  try{
    const data:any = req.body;
    const validateResponse:any = await validationSchema(data);
    if(validateResponse.message.status ==="error"){
      return res.status(401).json( {
       message: validateResponse.message,
       error:validateResponse.error.message.details[0].message
      })}
      
    const result:any = await SignInRepo(req);
    if(result.status ==="success"){
      return res.status(200).send({
          status:"success",
          data:result.data
      })
    }else{
      return res.status(400).send({
          status:result.status,
          data:result?.data
      })
    }
     
  }catch(error){
    return res.status(500).send({
      message:"Error Signing in user",
      error:error
    
    })
  }
}