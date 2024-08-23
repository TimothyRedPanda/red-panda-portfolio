"use client";
import askQuestion from "../lib/fetch";
import { useState, useEffect, useRef } from "react";
import Response from "../components/Response/Response";
import { Button, Input } from "ui-redpanda";
import "ui-redpanda/dist/style.css";
import sanitizedInput from "../utils/sanitizeInput";

const PandaChat = () => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const sanitized = sanitizedInput(e.target.value);
		setInputVal(sanitized);
	};
	// The inputVal is storing our users input which we can then send to the API.
	const [inputVal, setInputVal] = useState("");
	// This is storing our memory, allowing us a list of the questions and responses.
	const [memory, setMemory] = useState<{ text: string; response: string }[]>(
		[],
	);
	// If this is set to true, our Button will display "Thinking..." instead of "Submit".
	const [loading, setLoading] = useState(false);
	// This is referencing the memoryRef so we can scroll to the bottom of the memory.
	const memoryRef = useRef(null);

	async function dataset() {
		// When the dataset function is called, setLoading is set to true, the API is called, and then setLoading is set to false.
		setLoading(true);
		const response = await askQuestion(inputVal);
		setLoading(false);
		// If the response is undefined, we set the response to "Apologies, I can't respond right now. Please try again later."
		const newMemory =
			response.choices[0].message.content === undefined
				? {
						text: inputVal,
						response:
							"Apologies, I can't respond right now. Please try again later.",
					}
				: // Otherwise, we set the response to the response from the API.
					{ text: inputVal, response: response.choices[0].message.content };
		// We then add the newMemory to the memory array.
		setMemory((prevMemory) => [...prevMemory, newMemory]);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: Needs to run on memory change
	useEffect(() => {
		if (memoryRef.current) {
			(memoryRef.current as HTMLDivElement).scrollTop = (
				memoryRef.current as HTMLDivElement
			).scrollHeight;
		}
	}, [memory]);

	const welcomeMessage =
		"Welcome, I'm a friendly AI here to help you with coding!";
	return (
		<main className="w-full h-full overflow-hidden text-slate-900 bg-slate-100 overflow-x-hidden grid grid-rows-auto-1fr">
			<section className="w-full p-4 flex flex-col gap-5 items-center">
				<p className="font-bold text-size-sm w-full md:w-1/2 text-center">
					{welcomeMessage}
				</p>
				{(!loading && (
					<span className="w-3/4 shadow-questionShadow">
						<Response memory={memory} memoryRef={memoryRef} loading={loading} />
					</span>
				)) || (
					<div className="w-3/4 shadow-questionShadow font-bold text-center rounded-md h-[35em] whitespace-pre-line overflow-y-auto p-5">
						Just having a think...
					</div>
				)}
				<section className="flex flex-col items-center md:flex-row gap-5 justify-center w-3/4">
					<Input type="text" className="w-full" onChange={handleChange} />
					<Button onClick={() => dataset()} variant="contained">
						{loading ? "Thinking" : "Submit"}
					</Button>
				</section>
			</section>
		</main>
	);
};

export default PandaChat;
