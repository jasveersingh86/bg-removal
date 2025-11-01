 import mongoose from 'mongoose';
  const useSchema= new mongoose.Schema({
    clerkId:{type:String,required:ture, unique :ture},
    email:{type:String,required:ture,unique:ture},
    photo:{type:String,required:ture},
    firstName:{type:String},
    lastName:{type:String},
    creaditBalance:{type:Number,default:10}
  })

  const userModel=mongoose.user.models || mongoose.model("usser",useSchema);

  export default userModel;