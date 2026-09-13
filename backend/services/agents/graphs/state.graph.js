import { Annotation } from "@langchain/langgraph";

export const agentState = Annotation.Root({
    prompt: Annotation({ reducer: (_, next) => next, default: () => "" }),
    agent: Annotation({ reducer: (_, next) => next, default: () => "chat" }),
    aiResponse: Annotation({ reducer: (_, next) => next, default: () => "" })
});