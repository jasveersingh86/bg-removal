import 'dotenv/config'
import express, { json } from 'express'
import cors  from 'cors'
import connectDB from './configs/mongodb.js'

//  App config 
 const PORT=process.env.PORT || 4000
 const app=express();
 await connectDB();
 
 // Intailize Middleware
 app.use(express(json))
app.use(cors())


 //API routes
 app.get('/',(req,res)=>res.send("api working  singh and i am a software student and fome india and you tell me where are you from plz care fully thank you so much god."));
 app.listen(PORT,()=>console.log("Server runing at the"+PORT));