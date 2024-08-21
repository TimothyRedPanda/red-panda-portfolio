import { useState, useEffect, cache } from "react";
import { fetchData } from "../lib/fetchData";

interface Character {
	firstname: string;
	lastname: string;
	race: string;
	dob: string;
	title: string;
	description: string;
	uuid: string;
}

export const useFetchCharacters = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDataFromSupabase = async () => {
			try {
				const data = await fetchData("characters");
				setCharacters(data);
				setLoading(false);
				console.log(data);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError("Failed to fetch data.");
				setLoading(false);
			}
		};

		fetchDataFromSupabase();
	}, []);

	return { characters, loading, error };
};
