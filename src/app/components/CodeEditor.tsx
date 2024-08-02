import { useState } from "react";

function CodeEditor() {
	const [bold, setBold] = useState(false);
	const [underline, setUnderline] = useState(false);
	return (
		<main className="w-full h-full flex flex-col gap-1">
			<h2>Text Editor</h2>
			<section className="flex flex-col gap-1">
				<button
					type="button"
					onClick={() => {
						setBold(!bold);
					}}
				>
					Bold
				</button>
				<button
					type="button"
					onClick={() => {
						setUnderline(!underline);
					}}
				>
					Underline
				</button>
				<input
					className={`w-full h-full p-10 ${bold ? "font-thin" : "font-bold"} ${underline ? "underline" : null}`}
					id="textField"
					type="text"
					defaultValue={"Text Field"}
				/>
			</section>
		</main>
	);
}

export default CodeEditor;
