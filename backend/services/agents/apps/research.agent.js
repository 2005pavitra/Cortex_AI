export const research_agent = async (state) => ({
    agent: "research",
    aiResponse: `Research request received. I can help investigate and compare: ${state.prompt}`
});
