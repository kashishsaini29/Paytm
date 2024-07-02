import mongoose from "mongoose";
import Account,{ account } from "./schemas/account.schema";

export async function getBalance(userId:any){
    try{
        console.log("account.getBalance",userId);
      const result:any = await Account.find({userId:userId});
      console.log("result",result);
      return {
        status:"success",
        data:result[0].balance
      }
    }catch(error){
        console.log("Error getting balance",error);
        return error
    }
}