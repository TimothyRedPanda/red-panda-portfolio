import Editor from "@monaco-editor/react";
import React, { useState, useEffect } from "react";
import Output from "./Output";
import questions from "../data/questions.json";

function CodeEditor() {
	const [value, setValue] = useState("");

	useEffect(() => {
		const randomCode =
			questions[Math.floor(Math.random() * questions.length)].example;
		setValue(randomCode);
	}, []);

	const handleRandomize = () => {
		const newExample =
			questions[Math.floor(Math.random() * questions.length)].example;
		setValue(newExample);
	};

	return (
		<main className="p-6 flex flex-col gap-1 md:flex-row coder">
			<span className="md:w-1/2 w-full flex gap-2 flex-col">
				<span className="w-full flex place-content-center">
					<button
						className="w-fit bg-slate-700 hover:bg-slate-500 pt-1 pb-1 pl-3 pr-3 rounded-sm text-slate-50 button"
						type="button"
						onClick={handleRandomize}
					>
						Randomise Starter Code
					</button>
				</span>
				<Editor
					className="codeEditor"
					theme="vs-dark"
					defaultLanguage="javascript"
					value={value}
					onChange={(value) => setValue(value ? value : "// Enter Code")}
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
}

export default CodeEditor;
