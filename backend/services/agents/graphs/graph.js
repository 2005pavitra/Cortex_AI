import { END, START, StateGraph } from "@langchain/langgraph";
import { agentState } from "./state.graph.js";
import { router } from "./router.js";
import { chat_agent } from "../apps/chat.agent.js";
import { coding_agent } from "../apps/coding.agent.js";
import { planning_agent } from "../apps/planning.agent.js";
import { research_agent } from "../apps/research.agent.js";

const workflow = new StateGraph(agentState)

workflow.addNode("router", router);
workflow.addNode("chat", chat_agent);
workflow.addNode("coding", coding_agent);
workflow.addNode("planning", planning_agent);
workflow.addNode("research", research_agent);

workflow.addEdge(START, "router");
workflow.addConditionalEdges("router", (state) => state.agent, {
	chat: "chat",
	coding: "coding",
	planning: "planning",
	research: "research"
});

workflow.addEdge("chat", END);
workflow.addEdge("coding", END);
workflow.addEdge("planning", END);
workflow.addEdge("research", END);

export const agentGraph = workflow.compile();