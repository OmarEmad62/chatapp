import dotenv from "dotenv"
import bcrypt from "bcrypt"
import user from "../models/user.js"
import jwt from "jsonwebtoken"
import cloudinary from "../lib/cloudinary.js"
dotenv.config();
export const Register=async(req,res)=>{
    try{
    const {email,fullName,password,profilePic}=req.body
    let salt=await bcrypt.genSalt(10);
    let hashedPassword =await bcrypt.hash(password,salt);
    const USER=await user.create({
        email,
        fullName,
        password:hashedPassword,
        profilePic
    });
    
    const token = await jwt.sign({ userId: USER._id }, process.env.accessToken, {
        expiresIn: process.env.accessTokenExpiration
    });
    
res.cookie("jwt",token,{
    maxAge:7*24*60*60*1000,
    httpOnly:true,
    sameSite:"strict",
    secure:false
})
    res.status(200).send("created succefuly")

    
    }catch(error){
res.status(500).send("error in creating user")
    }
}

export const login =async(req,res)=>{

    const {email,password}=req.body
    try{
        const User= await user.findOne({email})
        if(!User){
            res.status(400).json({error:"Please try to login with correct credentials"})
        }
        const passval=await bcrypt.compare(password,User.password)
        if(!passval){
            res.status(400).json({error:"Please try to login with correct credentials"})
        }
        const Token=await jwt.sign({userId:User._id},process.env.accessToken,{
            expiresIn: process.env.accessTokenExpiration
        });
        res.cookie("jwt",Token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
        sameSite:"strict",
        secure:false
        })
        res.status(200).json({ message: "logged in successfully" });
    }catch(err){
        res.status(500).json({ error: "Internal Server Error" });
    }


}

export const logout=async(req,res)=>{
try{
res.cookie("jwt","",{maxAge:0})
res.status(200).json({message:"logged out successfully"})
}catch(err){
res.status(500).json({error:"internal error"})
}
}
export const updateProfile=async(req,res)=>{
    try{
        const {profilePic}=req.body
        const id=req.user._id
        if (!profilePic) {
            return res.status(400).json({ message: "Profile pic is required" });
          }
        const uploadRes=await cloudinary.uploader.upload(profilePic);
        const updatedUser=await user.findByIdAndUpdate(id,{profilePic:uploadRes.secure_url},{new:true})
        res.status(200).json(updatedUser);   
    }catch(err){
        console.log(`error in updating profile pic ${err}`)
        res.status(500).json({error:"internal error"})
    }
}
export const checkAuth=(req,res)=>{
    try{
        res.status(200).json(req.user)
    }catch(err){
        console.log(`error in check user authentication ${err}`)
        res.status(500).json({error:"internal error"})

    }
}