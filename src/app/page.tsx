import RedPandaStudio from "./components/RedPandaStudio";
import QuestionsLogic from "./components/QuestionsLogic";
import questions from "./data/questions";

export default function Home() {
	const randomNumb = Math.floor(Math.random() * questions.length);
	return (
		<main className="p-5 h-dvh gap-6 flex flex-col pt-0">
			<span className="logo place-self-center scale-75 md:scale-100">
				<RedPandaStudio />
			</span>
			<span className="grid grid-flow-row grid-cols-1 gap-10">
				<QuestionsLogic numb={randomNumb} />
			</span>
		</main>
	);
}
