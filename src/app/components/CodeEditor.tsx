import Editor from "@monaco-editor/react";
import React, { useState, useEffect } from "react";
import Output from "./Output";
import { fetchData } from "../lib/fetchData";
import { Button } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

interface Data {
	title: string;
	description: string;
	example: string;
	output: string;
}

const CodeEditor = () => {
	const [value, setValue] = useState("");
	const [questions, setQuestions] = useState<Data[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDataFromSupabase = async () => {
			try {
				const data = await fetchData("javascripttips");
				setQuestions(data);
				const randomCode =
					data[Math.floor(Math.random() * data.length)].example;
				setValue(randomCode);
				setLoading(false);
			} catch (err) {
				console.error("Error fetching data:", err);
				setError("Failed to fetch data.");
				setLoading(false);
			}
		};

		fetchDataFromSupabase();
	}, []);

	const handleRandomize = () => {
		if (questions.length > 0) {
			const newExample =
				questions[Math.floor(Math.random() * questions.length)].example;
			setValue(newExample);
		}
	};

	if (loading) {
		return <h1 className="w-screen text-center text-3xl">Loading...</h1>;
	}

	if (error) {
		return <h1 className="w-screen text-center text-3xl">{error}</h1>;
	}

	return (
		<main className="p-6 flex flex-col gap-1 md:flex-row coder">
			<span className="md:w-1/2 w-full flex gap-2 flex-col">
				<span className="w-full flex place-content-center">
					<Button onClick={handleRandomize}>Randomise Starter Code</Button>
				</span>
				<Editor
					className="codeEditor"
					theme="vs-dark"
					defaultLanguage="javascript"
					value={value}
					onChange={(value) => setValue(value ? value : "")}
					options={{
						cursorBlinking: "smooth",
						acceptSuggestionOnEnter: "smart",
						minimap: {
							enabled: false,
						},
						padding: {
							top: 20,
						},
					}}
				/>
			</span>
			<Output editorValue={value} />
		</main>
	);
};

export default CodeEditor;
