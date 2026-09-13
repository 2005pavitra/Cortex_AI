import dotenv from "dotenv"
import { fileURLToPath } from "node:url"
import { ChatGroq } from "@langchain/groq"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"

dotenv.config({
    path: fileURLToPath(new URL("../.env", import.meta.url))
})


const groq = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0,
    maxTokens: undefined,
    maxRetries: 2
})

const gemini = new ChatGoogleGenerativeAI({
    model: "gemini-3.6-flash",
    temperature: 0,
    maxRetries: 2
})

const taskModels = {
    chat: groq,
    search: gemini,
    coding: groq,
    pdf: gemini,
    ppt: gemini,
    imageGen: gemini
};

export const getModel = (agent) => {
    const model = taskModels[agent];

    if (!model) {
        throw new Error(`No model configured for agent: ${agent}`);
    }

    return model;
};

export const invokeModel = async (agent, prompt) => {
    const response = await getModel(agent).invoke(prompt);
    return Array.isArray(response.content)
        ? response.content.map((part) => part.text ?? "").join("")
        : response.content;
};

export { groq, gemini }