const routePatterns = [
	{ agent: "coding", pattern: /\b(code|coding|debug|bug|javascript|python|function|api)\b/i },
	{ agent: "research", pattern: /\b(research|compare|sources|latest|investigate)\b/i },
	{ agent: "planning", pattern: /\b(plan|planning|roadmap|steps|organize|project)\b/i }
];

export const router = async (state) => {
	const prompt = state.prompt.trim();
	const match = routePatterns.find(({ pattern }) => pattern.test(prompt));

	return { agent: match?.agent ?? "chat" };
};