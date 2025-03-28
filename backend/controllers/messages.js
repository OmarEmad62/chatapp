import cloudinary from "../lib/cloudinary.js"
import Message from "../models/message.js";
import User from "../models/user.js"
import{getReceiverSocketId,io}from "../lib/socket.js"

export const getUsersForSidebar=async(req,res)=>{
    try{
    const loggedinUser =req.user._id;
    const users=await User.find({_id:{$ne:loggedinUser}}).select("-password")
    res.status(200).json(users)
    }catch(err){
        res.status(500).json({error:"internal server error"})

    }

}
export const getMessages=async(req,res)=>{
    try{
    const{id:ChatUserId}=req.params;
    const myId=req.user._id;
    const Messages=await Message.find({
        $or:[
            {senderId:myId,receiverId:ChatUserId},
            {senderId:ChatUserId,receiverId:myId}
        ]
    })
    res.status(200).json(Messages);
}catch(err){
    res.status(500).json({error:"internal server error"})
}

};

export const sendMessage=async(req,res)=>{
    try{
    const  senderId=req.user._id;
    const {id:receiverId}=req.params;
    const{text,image}=req.body
    let imageUrl;
    if(image){
        const uploadRes=await cloudinary.uploader.upload(image);
        imageUrl=uploadRes.secure_url;
    }
    const newMessage = new Message({
        senderId,
        receiverId,
        text,
        image: imageUrl,
      });
  
      await newMessage.save();
    const receiverSocketId=getReceiverSocketId(receiverId)
    if(receiverSocketId){
        io.to(receiverSocketId).emit("newMessage",newMessage)
    }
    res.status(201).json(newMessage);
    }catch(err){
        res.status(500).json({error:"internal server error"})
    }
}