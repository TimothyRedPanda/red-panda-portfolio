"use client";
import Editor from "@monaco-editor/react";
import React, { useRef, useState, useEffect } from "react";
import Output from "./Output";

function CodeEditor() {
	const [value, setValue] = useState("");

	function onMount(editor) {
		editor.focus;
	}

	return (
		<main className="p-6 flex flex-col gap-1 md:flex-row coder">
			<Editor
				className="codeEditor"
				theme="vs-dark"
				defaultLanguage="javascript"
				defaultValue="// Type here for fun!"
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
