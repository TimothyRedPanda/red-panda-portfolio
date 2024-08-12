import React, { useState, useEffect } from "react";
import { fetchData } from "../../lib/fetchData";
import EditorComponent from "./EditorComponent";
import RandomizeButton from "./RandomizeButton";
import OutputComponent from "./OutputComponent";

const CodeEditor = () => {
	const [value, setValue] = useState("");
	const [questions, setQuestions] = useState<{ example: string }[]>([]);
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
					<RandomizeButton onClick={handleRandomize} />
				</span>
				<EditorComponent value={value} setValue={setValue} />
			</span>
			<OutputComponent editorValue={value} />
		</main>
	);
};

export default CodeEditor;
