import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "../config/db.js";
import chatRouter from "./routes/chat.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8004;

app.get("/", (req, res) => {
    res.json({
        message: "Chat service is running"
    });
});

app.use("/", chatRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`Chat Services server started at PORT ${PORT}`);
});