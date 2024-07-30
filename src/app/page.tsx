import RedPandaStudio from "./components/RedPandaStudio";
import QuestionsLogic from "./components/QuestionsLogic";

export default function Home() {
	return (
		<main className="p-6 items-center gap-6 flex flex-col">
			<span className="logo">
				<RedPandaStudio />
			</span>
			<QuestionsLogic />
		</main>
	);
}
