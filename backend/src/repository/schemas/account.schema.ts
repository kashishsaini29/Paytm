import mongoose ,{Schema , Document} from "mongoose";

export interface account extends Document{
   userId:mongoose.Schema.Types.ObjectId;
   balance:number;
}

const  AccountSchema:Schema= new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  },
  balance:{
    type:Number
  }
})

export default mongoose.model<account>("Account",AccountSchema);