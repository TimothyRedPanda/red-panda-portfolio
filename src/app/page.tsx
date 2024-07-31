import RedPandaStudio from "./components/RedPandaStudio";
import QuestionsLogic from "./components/QuestionsLogic";

export default function Home() {
	return (
		<main className="p-5 items-center gap-6 flex flex-col pt-0">
			<span className="logo">
				<RedPandaStudio />
			</span>
			<QuestionsLogic />
		</main>
	);
}
