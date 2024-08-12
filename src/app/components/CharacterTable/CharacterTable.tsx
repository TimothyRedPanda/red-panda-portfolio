"use client";
import { useState } from "react";
import { useFetchCharacters } from "../../../hooks/useFetchCharacters";
import CharacterFilter from "./CharacterFilter";
import CharacterList from "./CharacterList";

const CharacterTable = () => {
	const [filter, setFilter] = useState<string>("");
	const { characters, loading, error } = useFetchCharacters();
	const [numberResults, setNumberResults] = useState<string>("");

	const filteredCharacters = characters.filter((item) => {
		return filter
			? item.firstname.toLowerCase().includes(filter.toLowerCase()) ||
					item.lastname.toLowerCase().includes(filter.toLowerCase())
			: true;
	});

	if (loading) {
		return <h1 className="w-screen text-center text-3xl">Loading...</h1>;
	}

	if (error) {
		return <h1 className="w-screen text-center text-3xl">{error}</h1>;
	}

	return (
		<main className="w-[75vw] place-content-center p-4 md:p-10">
			<CharacterFilter
				setFilter={setFilter}
				characters={characters}
				filteredCharacters={filteredCharacters}
				numberResults={numberResults}
			/>
			<br />
			<CharacterList characters={filteredCharacters} />
		</main>
	);
};

export default CharacterTable;
