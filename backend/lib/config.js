import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
 export const mongoConn=async()=>{
    try{
        let conn=await mongoose.connect(process.env.MongoUrl);
        console.log(conn.connection.host);
    }catch(err){
       console.log(err)
    }
}
