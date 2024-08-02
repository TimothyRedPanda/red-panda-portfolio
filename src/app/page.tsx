"use client";
import RedPandaStudio from "./components/RedPandaStudio";
import QuestionsLogic from "./components/QuestionsLogic";
import questions from "./data/questions.json";

export default function Home() {
	const randomNumb = Math.floor(Math.random() * questions.length);
	return (
		<main className="p-3 gap-6 flex flex-col">
			<span className="hidden md:inline logo place-self-center scale-75 md:scale-100">
				<RedPandaStudio />
			</span>
			<span className="grid grid-flow-row grid-cols-1 gap-10">
				<QuestionsLogic numb={randomNumb} />
			</span>
		</main>
	);
}
