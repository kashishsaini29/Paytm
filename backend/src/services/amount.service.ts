import { Response,Request } from "express";
import {getBalance} from "../repository/bankAccount.repository";
import mongoose from "mongoose";
import User from "../repository/schemas/user.schema";
import Account from "../repository/schemas/account.schema";

export async function getBalanceService(req:Request, res:Response){
    try{
     const userId= req.userId;
     const result:any = await getBalance(userId);

     if(result.status==="success"){
        return res.status(200).json({
            status:"success",
            data:result.data
        })
     }else{
        return res.status(403).json({
            status:result.status,
            data:result
        })
     }
    }catch(error){
        return res.status(500).json({
            message:"Error in getting balance",
            error:error
        })
    }
}

export async function transfer(req:Request, res:Response){
    const session = await mongoose.startSession();
    try{
        session.startTransaction();
        const {amount, to} =req.body;
        
        const account:any = await Account.findOne({userId:req.userId}).session(session);
        console.log("account: " + account)
        if(!account || account.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                message:"Insufficient balance"
            })
        }

        const toAccount = await Account.findOne({userId:to}).session(session);
        if(!toAccount){
            await session.abortTransaction();
            return res.status(400).json({
                message:"Invalid Account"
            })
        }
      await Account.updateOne({userId:req.userId}, {$inc:{balance:-amount}}).session(session);
      await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);

      await session.commitTransaction();
      return res.status(200).json({
        status:"success",
        message:"Transfer successfully"
      })
    }catch(error:any){
      console.log(error)
      await session.abortTransaction();
      return res.status(500).json({
        message:"Error in transfer amount",
        error:error.message
      })
    }
}