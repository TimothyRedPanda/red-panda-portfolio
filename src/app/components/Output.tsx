import executeCode, { type ExecutionResult } from "../lib/piston_request";
import { useState } from "react";
import { Button } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

interface OutputProps {
	editorValue: string;
}

const Output = ({ editorValue }: OutputProps) => {
	const [run, setRun] = useState<null | string[]>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const runCode = async () => {
		const sourceCode = editorValue;
		if (!sourceCode) return;

		try {
			setIsLoading(true);
			const { run: result }: ExecutionResult = await executeCode(sourceCode);
			setRun(result.output.split("\n"));
			result.stderr ? setIsError(true) : setIsError(false);
		} catch (error) {
			alert(error);
		} finally {
			setIsLoading(false);
		}
	};

	const runOutput = () => {
		setRun(null);
		runCode();
	};

	const clearOutput = () => {
		setRun(null);
		setIsError(false);
	};

	return (
		<main className="w-1/2 gap-2 output">
			<section className="flex justify-center w-full">
				<section className="flex flex-cols gap-2">
					<Button onClick={runOutput}>
						{isLoading ? "...running" : "Run"}
					</Button>
					<Button onClick={clearOutput}>
						{isLoading ? "...running" : "clear"}
					</Button>
				</section>
			</section>
			<div
				className={`p-2 ${
					isError ? "text-red-400 border-red-400 border-2" : "text-slate-50"
				} rounded-md bg-slate-900 w-full p-3`}
			>
				{run !== null
					? run.map((item: string, index: number) => {
							const key = index + 1;
							return (
								<span key={key}>
									{item}
									<br />
								</span>
							);
						})
					: "Click run to run code!"}
			</div>
		</main>
	);
};

export default Output;
