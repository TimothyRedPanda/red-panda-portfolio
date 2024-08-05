"use client";
import RedPandaStudio from "./components/RedPandaStudio";
import QuestionsLogic from "./components/QuestionsLogic";
import questions from "./data/questions.json";
import Link from "next/link";

const Home = () => {
	const randomNumb = Math.floor(Math.random() * questions.length);
	return (
		<main className="p-3 gap-6 flex flex-col">
			<span className="hidden md:inline logo place-self-center scale-75 md:scale-100">
				<RedPandaStudio />
			</span>
			<span className="grid grid-flow-row grid-cols-1 gap-10">
				<p className="w-full place-content-center flex">
					<Link
						className="hover:underline hover:text-slate-500"
						href="/practice"
					>
						Visit Code Fun to use a built in editor!
					</Link>
				</p>
				<QuestionsLogic numb={randomNumb} />
			</span>
		</main>
	);
};

export default Home;
