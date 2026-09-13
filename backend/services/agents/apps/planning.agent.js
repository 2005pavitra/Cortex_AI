export const planning_agent = async (state) => ({
    agent: "planning",
    aiResponse: `Planning request received. I can turn this into actionable steps: ${state.prompt}`
});
