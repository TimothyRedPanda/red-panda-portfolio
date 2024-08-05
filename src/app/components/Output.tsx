import executeCode from "../api";
import { useState } from "react";

interface OutputProps {
	editorValue: string;
}

const Output = ({ editorValue }: OutputProps) => {
	const [run, setRun] = useState<null | []>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const runCode = async () => {
		const sourceCode = editorValue;
		if (!sourceCode) return;

		try {
			setIsLoading(true);
			const { run: result } = await executeCode(sourceCode);
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
					<button
						onClick={runOutput}
						className="w-fit bg-slate-700 hover:bg-slate-500 pt-1 pb-1 pl-3 pr-3 rounded-sm text-slate-50 button"
						type="button"
					>
						{isLoading ? "...running" : "Run"}
					</button>
					<button
						onClick={clearOutput}
						className="w-fit bg-slate-700 hover:bg-slate-500 pt-1 pb-1 pl-3 pr-3 rounded-sm text-slate-50 button"
						type="button"
					>
						{isLoading ? "...running" : "clear"}
					</button>
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
