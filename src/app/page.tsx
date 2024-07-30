import RedPandaStudio from "./components/RedPandaStudio";
import QuestionsLogic from "./components/QuestionsLogic";

export default function Home() {
	return (
		<main className="p-4 items-center gap-6 flex flex-col w-full">
			<RedPandaStudio />
			<QuestionsLogic />
		</main>
	);
}
