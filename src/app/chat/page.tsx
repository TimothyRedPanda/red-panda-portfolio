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
		<main className="w-screen h-screen min-h-screen items-center flex flex-col gap-2 chat bg-slate-60 overflow-hidden">
			<div
				ref={chatContainerRef}
				className="flex flex-col md:w-3/4 h-[80%] overflow-y-scroll whitespace-pre-wrap gap-4 p-5 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-amber-400 scrollbar-track-transparent"
			>
				{messages.map((m) => (
					<div
						key={m.id}
						className={`p-4 ${
							m.role === "user"
								? "self-end w-fit bg-slate-900 rounded-md"
								: "self-start w-full bg-slate-800"
						}`}
					>
						<FormatContent content={m.content} />
					</div>
				))}
			</div>

			<form
				onSubmit={handleSubmit}
				className={`w-fit py-2 pl-2 pr-4 flex flex-row gap-2 justify-center items-center ${
					isLoading
						? "opacity-50 pointer-events-none cursor-not-allowed"
						: "opacity-100"
				} bg-slate-900 text-slate-50 transition-all duration-1000 border-gray-300 rounded-full shadow-xl`}
			>
				<input
					className={`${
						isLoading
							? "opacity-50 pointer-events-none cursor-not-allowed"
							: "opacity-100"
					} bg-slate-900 rounded-l-full text-slate-50 outline-amber-400 transition-all flex flex-col justify-center border-none items-center duration-1000 w-[80vw] max-w-[35em] border p-4`}
					value={input}
					placeholder={`${
						isLoading
							? "Just having a think..."
							: messages.length === 0
								? "Hiya, introduce yourself!"
								: "Your replies go here..."
					}`}
					onChange={sanitized}
				/>
				<button type="submit" className="text-2xl">
					{isLoading ? "❌" : "✔️"}
				</button>
			</form>
		</main>
	);
}
