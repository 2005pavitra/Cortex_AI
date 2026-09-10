import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRouter from "../../gateway/routes/auth.route.js";
dotenv.config()

const app = express();
app.use(express.json())


const PORT = process.env.PORT || 4000

app.use("/", authRouter)

app.get('/',(req, res) =>{
    res.json({message:"Auth route"})
})

app.listen(PORT, () =>{
    connectDB()
    console.log(`Auth Services server started at PORT ${PORT}`)
})