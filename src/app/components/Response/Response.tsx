import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

interface MemoryItem {
	text: string;
	response: string;
}

interface ResponseProps {
	memory: MemoryItem[];
	memoryRef: React.RefObject<HTMLDivElement>;
	loading: boolean;
}

const Response: React.FC<ResponseProps> = ({ memory, memoryRef }) => {
	const extractParts = (text: string) => {
		// Extract parts of the text, separating code snippets and plain text
		const parts = [];
		const regex = /```(\w+)?\s*([\s\S]*?)\s*```/g;
		let lastIndex = 0;
		let match: RegExpExecArray | null;

		while (true) {
			match = regex.exec(text);
			if (match === null) break;

			// Push the text before the code snippet
			if (match.index > lastIndex) {
				parts.push({
					type: "text",
					content: text.slice(lastIndex, match.index),
				});
			}

			// Push the code snippet
			parts.push({
				type: "code",
				language: match[1] || "plaintext",
				content: match[2].trim(),
			});

			lastIndex = regex.lastIndex;
		}

		// Push the remaining text after the last code snippet
		if (lastIndex < text.length) {
			parts.push({ type: "text", content: text.slice(lastIndex) });
		}
		return parts;
	};

	return (
		<div
			ref={memoryRef}
			className="w-full md:w-1/2 bg-slate-50 rounded-md h-[35em] whitespace-pre-line overflow-y-auto p-5"
		>
			{memory.map((memory, index) => {
				const key = Math.random() * index + 1;
				const parts = extractParts(memory.response);
				return (
					<span key={key}>
						<span className="flex flex-col gap-2">
							<span className="font-bold px-4 py-2 bg-blue-900 text-slate-50 rounded-full w-fit self-end">
								{memory.text}
							</span>{" "}
							<span className="px-4 py-2 text-slate-900 rounded-full">
								{parts.map((part, idx) => {
									const key = idx + 1;
									return (
										<div key={key}>
											{part.type === "code" ? (
												<SyntaxHighlighter language={part.language} style={coy}>
													{part.content}
												</SyntaxHighlighter>
											) : (
												<ReactMarkdown>{part.content}</ReactMarkdown>
											)}
										</div>
									);
								})}
							</span>
						</span>
						<br />
					</span>
				);
			})}
		</div>
	);
};

export default Response;
