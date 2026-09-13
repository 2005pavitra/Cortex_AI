import { invokeModel } from "../config/llmModels.js";

export const image_gen_agent = async (state) => ({
	agent: "imageGen",
	aiResponse: await invokeModel("imageGen", `Convert this image request into a detailed generation prompt with subject, composition, lighting, style, and aspect ratio:\n${state.prompt}`)
});