import { END, START, StateGraph } from "@langchain/langgraph";
import { agentState } from "./state.graph.js";
import { router } from "./router.js";
import { chat_agent } from "../apps/chat.agent.js";
import { coding_agent } from "../apps/coding.agent.js";
import { search_agent } from "../apps/search.agent.js";
import { pdf_agent } from "../apps/pdf.agent.js";
import { ppt_agent } from "../apps/ppt.agent.js";
import { image_gen_agent } from "../apps/imageGen.agent.js";

const workflow = new StateGraph(agentState);

workflow.addNode("router", router);
workflow.addNode("chat", chat_agent);
workflow.addNode("coding", coding_agent);
workflow.addNode("search", search_agent);
workflow.addNode("pdf", pdf_agent);
workflow.addNode("ppt", ppt_agent);
workflow.addNode("imageGen", image_gen_agent);

workflow.addEdge(START, "router");
workflow.addConditionalEdges("router", (state) => state.agent, {
	chat: "chat",
	coding: "coding",
	search: "search",
	pdf: "pdf",
	ppt: "ppt",
	imageGen: "imageGen"
});

workflow.addEdge("search", "chat");
workflow.addEdge("chat", END);
workflow.addEdge("coding", END);
workflow.addEdge("search", END);
workflow.addEdge("pdf", END);
workflow.addEdge("ppt", END);
workflow.addEdge("imageGen", END);

export const agentGraph = workflow.compile();