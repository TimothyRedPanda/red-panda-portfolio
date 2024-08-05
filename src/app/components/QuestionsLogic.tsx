"client";
import { useEffect, useState } from "react";
import { fetchData } from "../lib/fetchData"; // Adjust the import path as needed
import PrismLoader from "./PrismLoader";

interface QuestionsProps {
	numb: number;
}

interface Data {
	title: string;
	description: string;
	example: string;
	output: string;
}

const Questions = ({ numb }: QuestionsProps) => {
	const [questions, setQuestions] = useState<Data[]>([]);
	const [index, setIndex] = useState(numb);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDataFromSupabase = async () => {
			try {
				const data = await fetchData("javascripttips");
				setQuestions(data);
				setLoading(false);
			} catch (err) {
				console.error("Error fetching data:", err);
				setError("Failed to fetch data.");
				setLoading(false);
			}
		};

		fetchDataFromSupabase();
	}, []);

	const changeIndex = () => {
		if (questions.length > 0) {
			const newIndex = Math.floor(Math.random() * questions.length);
			setIndex(
				newIndex !== index
					? newIndex
					: Math.floor(Math.random() * questions.length),
			);
		}
	};

	if (loading) {
		return (
			<h1 className="w-screen text-center text-3xl">I'm loading okay!!!</h1>
		);
	}

	if (error) {
		return (
			<h1 className="w-screen text-center text-3xl">{`This is the error I got : ${error}`}</h1>
		);
	}

	if (!questions[index]) {
		return (
			<h1 className="place-self-center text-3xl">
				Something new this way comes,{" "}
			</h1>
		);
	}

	const { title, description, example, output } = questions[index];

	return (
		<section
			className="flex flex-col text-1xl gap-4 p-4 rounded-xl shadow-questionShadow w-full md:w-3/4 place-self-center text-slate-950 bg-slate-50"
			key={title}
		>
			<button
				className="bg-slate-950 text-slate-50 p-3 w-fit place-self-center rounded"
				onClick={changeIndex}
				type="button"
			>
				Random Tip
			</button>
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
		</section>
	);
};

export default Questions;
