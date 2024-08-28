import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";
import { content } from "./content";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages } = await req.json();

	const result = await streamText({
		model: openai("gpt-4o"),
		system: content,
		messages: convertToCoreMessages(messages),
	});

	return result.toDataStreamResponse();
}
