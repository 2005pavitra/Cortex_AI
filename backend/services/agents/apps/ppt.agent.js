import { invokeModel } from "../config/llmModels.js";

export const ppt_agent = async (state) => ({
	agent: "ppt",
	aiResponse: await invokeModel("ppt", `Create a clear presentation outline with slide titles and concise speaker notes for:\n${state.prompt}`)
});