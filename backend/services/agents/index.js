import express from "express"
import dotenv from "dotenv"
import connectDB from "../config/db.js";
import { agentGraph } from "./graphs/graph.js";
dotenv.config()

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000


connectDB()
app.get('/', (req, res) =>{
    res.json({message:"agent route"})
})

app.post('/run', async (req, res) => {
    const { prompt } = req.body;

    if (typeof prompt !== "string" || !prompt.trim()) {
        return res.status(400).json({ message: "A non-empty prompt is required" });
    }

    try {
        const result = await agentGraph.invoke({ prompt: prompt.trim() });
        res.json({ agent: result.agent, response: result.aiResponse });
    } catch (error) {
        res.status(500).json({ message: "Unable to process prompt", error: error.message });
    }
})




app.listen(PORT, () =>{
    console.log(`Agent server started at PORT ${PORT}`)
})