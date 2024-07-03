import { Request, Response } from "express";
import  {SignInRepo, createUser, getUsers, updateUser} from '../repository/users.repository';
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
    const balance = Math.floor(1 + Math.random() * 10000);
  const result:any = await createUser(data,balance);
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

export async function updateUserService(req:Request, res:Response){
  try{
      const userId =req.userId;
      const data = req.body;
      const validateResponse:any= await validationSchema(data);
      if(validateResponse.message.status ==="error"){
        return res.status(401).json( {
         message: validateResponse.message,
         error:validateResponse.error.message.details[0].message
        })}
      
      const response :any= await updateUser(data, userId);
     if(response.status ==="success"){
      return res.status(200).json({
         status:"success",
         data:response.data
      })
     }else{
      return res.status(403).json({
        status:response.status,
        data:response.data
      })
     }
  }catch(error){
    return res.status(500).json({
      message:"error updating user",
      error:error
    })
  }
}

export async function getUsersService(req:Request,res:Response){
  try{
    const name:any = req?.query?.name || "";
    console.log("name",name);
    const result:any = await getUsers(name);

    if(result.status ==="success"){
        return res.status(200).send({
          status:"success",
          data:result.data
        })
    }else{
      return res.status(403).send({
        status:result.status,
        data:result.data
      })
    }

  }catch(error){
    return res.status(500).send({
      message:"Error in getting users",
      error:error
    })
  }
}