import Joi from "joi";
import validation from "./common.validator";

export async function validationSchema(data:any){
    const messageSchema= Joi.object({
        name:Joi.string().trim().lowercase().required(),
        username:Joi.string().email().required(),
        role:Joi.string().valid('admin','user').required(),
        permissions:Joi.array().items(Joi.string().valid('upload','create','read','write')).required()
    })
    return validation(messageSchema, data);
}

