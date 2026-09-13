import { invokeModel } from "../config/llmModels.js";

export const pdf_agent = async (state) => ({
	agent: "pdf",
	aiResponse: await invokeModel("pdf", `Analyze or summarize the PDF-related request below. Mention any missing document content:\n${state.prompt}`)
});