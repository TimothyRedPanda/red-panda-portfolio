"use client";
import questions from "../data/questions.json";
import PrismLoader from "./PrismLoader";
import { useState } from "react";

interface QuestionsProps {
	numb: number;
}

export default function Questions({ numb }: QuestionsProps) {
	const [index, setIndex] = useState(numb);

	if (!questions[index]) {
		return <h1 className="place-self-center text-3xl">Coming Soon</h1>;
	}

	const { title, description, example, output } = questions[index];

	return questions.length > 0 ? (
		<section
			className="flex flex-col text-1xl gap-1 p-4 rounded-xl shadow-questionShadow w-full md:w-3/4 place-self-center text-slate-950 bg-slate-50"
			key={title}
		>
			<h2 className="text-center underline font-bold text-2xl">{title}</h2>
			<p>{description}</p>
			<pre className="code line-numbers p-2 text-xs md:text-base rounded-md">
				<code className="language-js">{example}</code>
			</pre>
			{output && <p>Output:</p>}
			{output && (
				<pre
					className="command-line language-command-line p-2 text-xs md:text-base rounded-md"
					data-user="Red Panda"
					data-host="studio"
				>
					<code>{output}</code>
				</pre>
			)}
			<PrismLoader />
			<button
				className="bg-slate-950 text-slate-50 p-3 w-fit place-self-center rounded"
				onClick={() => {
					const newIndex = Math.floor(Math.random() * questions.length);
					setIndex(
						newIndex !== index
							? newIndex
							: Math.floor(Math.random() * questions.length),
					);
				}}
				type="button"
			>
				Random Tip
			</button>
		</section>
	) : (
		<h1>Coming Soon</h1>
	);
}
