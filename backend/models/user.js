import mongoose from 'mongoose'
const{Schema} =mongoose;
const userSchema=new Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    fullName:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true
    },
    profilePic:{
        type:String,
        default:""
    }

},{timestamps:true})
const user=mongoose.model("USER",userSchema);
export default user;
//profilePic,password,fullName,email