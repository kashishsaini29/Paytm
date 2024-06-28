import Joi from "joi";

export default function validation(schema:any,data:any){
  let message = schema.validate(data);
  if(message.error){
    return{
        message:{
            status:"error"
        },
        error:{
            message:message.error
        }
    }
  }else{
    return {
        message:{
            status:"success"
            }
       }
  }
}