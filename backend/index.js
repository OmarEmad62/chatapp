import express from "express";
import dotenv from "dotenv";
import {mongoConn} from "./lib/config.js"
import http from "http";
import authRouter from "./routes/auth.js"
import messagesRouter from "./routes/messages.js"
import cookieParser from "cookie-parser";
import {app, server, io} from "./lib/socket.js"
import cors from "cors"
dotenv.config();
mongoConn();
app.use(express.json({ limit: "50mb" }));  
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRouter);
app.use("/api/messages",messagesRouter)
const Port=process.env.PORT||5000;
server.listen(Port,()=>{
    console.log(`server is running at ${Port}`)
})



