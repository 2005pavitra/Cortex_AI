import { invokeModel } from "../config/llmModels.js";

export const chat_agent = async (state) => ({
	agent: "chat",
	aiResponse: await invokeModel("chat", state.prompt)
});