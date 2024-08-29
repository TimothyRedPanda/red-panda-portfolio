"use client";
import React, { useEffect, useState } from "react";
import RedPandaStudio from "./components/RedPandaStudio/RedPandaStudio";
import QuestionsLogic from "./components/QuestionsLogic/QuestionsLogic";
import Link from "next/link";
import { fetchData } from "./lib/fetchData";

interface Data {
	title: string;
	description: string;
	example: string;
	output: string;
}

const Home = () => {
	const [questions, setQuestions] = useState<Data[]>([]);
	const [randomNumb, setRandomNumb] = useState<number | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDataFromSupabase = async () => {
			try {
				const data = await fetchData("javascripttips");
				setQuestions(data);

				// Only set randomNumb if data is not empty
				if (data.length > 0) {
					const randomIndex = Math.floor(Math.random() * data.length);
					setRandomNumb(randomIndex);
				}

				setLoading(false);
			} catch (err) {
				console.error("Error fetching data:", err);
				setError("Failed to fetch data.");
				setLoading(false);
			}
		};

		fetchDataFromSupabase();
	}, []);

	if (loading) {
		return <h1 className="w-screen text-center text-3xl">Loading...</h1>;
	}

	if (error) {
		return <h1 className="w-screen text-center text-3xl">{error}</h1>;
	}

	if (questions.length === 0 || randomNumb === null) {
		return <h1 className="w-screen text-center text-3xl">Coming Soon</h1>;
	}

	return (
		<main className="p-3 gap-6 flex flex-col overflow-y-scroll min-h-screen scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-amber-400 scrollbar-track-transparent">
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
