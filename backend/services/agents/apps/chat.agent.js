export const chat_agent = async (state) => ({
	agent: "chat",
	aiResponse: `I can help with that. You said: ${state.prompt}`
});