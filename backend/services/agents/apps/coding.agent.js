import { invokeModel } from "../config/llmModels.js";

export const coding_agent = async (state) => ({
    agent: "coding",
    aiResponse: await invokeModel("coding", `Act as a senior software engineer. Solve or explain this coding request clearly:\n${state.prompt}`)
});
