import { invokeModel } from "../config/llmModels.js";

export const search_agent = async (state) => ({
	agent: "search",
	aiResponse: await invokeModel("search", `Research and answer this request with concise, well-sourced guidance:\n${state.prompt}`)
});