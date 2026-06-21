import express from "express";
import {ENV} from "./lib/env.js";

const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({msg:"hi from home route"})
})

app.listen(ENV.PORT,()=>{
    console.log(`server is runing on port ${ENV.PORT}`)
    
})