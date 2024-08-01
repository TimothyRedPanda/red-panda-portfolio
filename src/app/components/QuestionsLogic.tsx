"use client";
import questions from "../data/questions.json";
import PrismLoader from "./PrismLoader";
import { useState } from "react";

export default function Questions(props: { numb: number }) {
	const alternateClass = (index: number) => {
		if (questions.length === 1) {
			return "bg-blue-400";
		}
		return index % 2 === 0
			? "bg-blue-400 lg:translate-x-1/2 translate-x-0"
			: "bg-amber-500 lg:translate-x-[-50%] translate-x-0";
	};

	const [index, setIndex] = useState(props.numb);

	if (!questions[index]) {
		return (
			<h1 className="place-self-center text-3xl">
				Welcome (Refresh for random tip)
			</h1>
		);
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
