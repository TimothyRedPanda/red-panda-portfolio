"use client";
import { useState } from "react";
import { useFetchGlossary } from "../../hooks/useFetchGlossary";
import GlossaryFilter from "./GlossaryFilter";
import GlossaryList from "./GlossaryList";

const GlossaryTable = () => {
	const [filter, setFilter] = useState<string>("");
	const { questions, loading, error } = useFetchGlossary();
	const [numberResults, setNumberResults] = useState<string>("");

	const filteredQuestions = questions.filter((item) => {
		return filter
			? item.title.toLowerCase().includes(filter.toLowerCase())
			: true;
	});

	if (loading) {
		return <h1 className="w-screen text-center text-3xl">Loading...</h1>;
	}

	if (error) {
		return <h1 className="w-screen text-center text-3xl">{error}</h1>;
	}

	return (
		<main className="w-dvw h-dvh p-2 md:p-5">
			<GlossaryFilter
				setFilter={setFilter}
				questions={questions}
				filteredQuestions={filteredQuestions}
				numberResults={numberResults}
			/>
			<br />
			<GlossaryList questions={filteredQuestions} />
		</main>
	);
};

export default GlossaryTable;
