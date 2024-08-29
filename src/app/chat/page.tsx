"use client";

import { useChat } from "ai/react";
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
		<main className="w-screen h-screen min-h-screen items-center  flex flex-col gap-2 chat text-slate-50 bg-slate-800 overflow-hidden">
			<div
				ref={chatContainerRef}
				className="flex flex-col md:w-3/4 h-[80%] overflow-y-scroll whitespace-pre-wrap gap-4 p-5 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-amber-400 scrollbar-track-transparent"
			>
				{messages.map((m) => (
					<div
						key={m.id}
						className={`p-4 ${
							m.role === "user"
								? "self-end w-fit bg-slate-800 text-slate-50 rounded-md"
								: "self-start bg-slate-900 text-slate-50 w-full"
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
					} bg-slate-900 text-slate-50 transition-all flex flex-col justify-center items-center duration-1000 w-full max-w-[35em] border border-gray-300 p-4 rounded shadow-xl`}
					value={input}
					placeholder={`${
						isLoading
							? "Just having a think..."
							: "Introduce yourself to start your learning journey!"
					}`}
					onChange={sanitized}
				/>
			</form>
		</main>
	);
}
