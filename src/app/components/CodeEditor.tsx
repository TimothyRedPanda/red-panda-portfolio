"use client";
import Editor from "@monaco-editor/react";
import React, { useRef, useState, useEffect } from "react";
import Output from "./Output";
import questions from "../data/questions.json";

function CodeEditor() {
	const exampleCode =
		questions[Math.floor(Math.random() * questions.length)].example;
	const [value, setValue] = useState(exampleCode);

	function onMount(editor) {
		editor.focus;
	}

	return (
		<main className="p-6 flex flex-col gap-1 md:flex-row coder">
			<Editor
				className="codeEditor"
				theme="vs-dark"
				defaultLanguage="javascript"
				defaultValue={value}
				onMount={onMount}
				onChange={(value) => setValue(value)}
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
			<Output editorValue={value} />
		</main>
	);
}

export default CodeEditor;
