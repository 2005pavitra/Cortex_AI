const routePatterns = [
	{ agent: "imageGen", pattern: /\b(generate|create|make|draw|design)\b.*\b(image|picture|illustration|logo| poster)\b/i },
	{ agent: "pdf", pattern: /\b(pdf|document|extract|summarize|read)\b/i },
	{ agent: "ppt", pattern: /\b(ppt|powerpoint|presentation|slides?|deck)\b/i },
	{ agent: "coding", pattern: /\b(code|coding|debug|bug|javascript|python|function|api|program)\b/i },
	{ agent: "search", pattern: /\b(search|research|find|lookup|sources|latest|investigate|web)\b/i }
];

export const router = async (state) => {
	const prompt = state.prompt.trim();
	const match = routePatterns.find(({ pattern }) => pattern.test(prompt));

	return { agent: match?.agent ?? "chat" };
};