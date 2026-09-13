export const coding_agent = async (state) => ({
    agent: "coding",
    aiResponse: `Coding request received. I can help break down, implement, or debug: ${state.prompt}`
});
