import { Request, Response } from "express";
import  {createUser} from '../repository/users.repository';
import { validationSchema } from "../validation/user.validator";
import User from "../repository/schemas/user.schema";


export async function createUserService(req: Request, res: Response){
 try{
    const data:any = req.body;
    const validateResponse:any = await validationSchema(data);
    console.log("validateResponse", validateResponse);
    if(validateResponse.message.status ==="error"){
      return res.status(401).json( {
       message: validateResponse.message,
       error:validateResponse.error.message.details[0].message
      })}
    console.log("data",data);
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
        status:"error",
        message:"Error creating user",
        error:error.message
    })
 }
}
