"use client";

import { useChat } from "ai/react";
import "prismjs/themes/prism-tomorrow.css"; // Import the PrismJS theme
import { useEffect, useRef } from "react";
import { sanitizeInput } from "../utils/sanitizeInput";
import { FormatContent } from "../utils/formatText";
export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit, isLoading } =
		useChat();
	const chatContainerRef = useRef<HTMLDivElement>(null);

	// Scroll to the bottom of the chat container when messages change
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop =
				chatContainerRef.current.scrollHeight;
		}
	}, [messages]);

	const sanitized = (e: React.ChangeEvent<HTMLInputElement>) => {
		const sanitizedInput = sanitizeInput(e.target.value);
		handleInputChange({
			...e,
			target: {
				...e.target,
				value: sanitizedInput,
			},
		});
	};

	return (
		<main className="w-screen h-screen flex flex-col gap-2 items-center chat text-slate-900">
			<div
				ref={chatContainerRef}
				className="flex flex-col w-3/4 overflow-y-scroll whitespace-pre-wrap h-3/4 gap-4 p-5"
			>
				{messages.map((m) => (
					<div
						key={m.id}
						className={`p-4 w-1/2 ${
							m.role === "user"
								? "self-end w-fit bg-slate-800 text-slate-50 rounded-md p-2"
								: "self-start w-2/3 rounded-md p-2 bg-slate-900 text-slate-50"
						}`}
					>
						{m.role === "user" ? "" : "Panda Chat: "}
						<FormatContent content={m.content} />
					</div>
				))}
			</div>

			<form
				onSubmit={handleSubmit}
				className="w-full p-4 flex flex-col items-center"
			>
				<input
					className={`${
						isLoading
							? "opacity-50 pointer-events-none cursor-not-allowed"
							: "opacity-100"
					} bg-slate-900 text-slate-50 transition-all duration-1000 w-full max-w-[35em] border border-gray-300 p-4 rounded shadow-xl`}
					value={input}
					placeholder={`${
						isLoading
							? "Just having a think..."
							: "Ask me anything about coding!"
					}`}
					onChange={sanitized}
				/>
			</form>
		</main>
	);
}
