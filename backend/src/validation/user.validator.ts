import Joi from "joi";
import validation from "./common.validator";

export async function validationSchema(data:any){
    const messageSchema= Joi.object({
       name:Joi.string(),
       lastname:Joi.string(),
       password:Joi.string().min(6).max(10),
      username:Joi.string().email(),
    })
    return validation(messageSchema, data);
}

