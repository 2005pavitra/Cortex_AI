import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
dotenv.config()

const app = express();


const PORT = process.env.PORT || 4000

app.get('/',(req, res) =>{
    res.json({message:"Auth route"})
})

app.listen(PORT, () =>{
    connectDB()
    console.log(`Microservices server started at PORT ${PORT}`)
})