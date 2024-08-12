import { useState, useEffect } from "react";
import { fetchData } from "../../src/app/lib/fetchData";

interface Character {
	firstname: string;
	lastname: string;
	dob: string;
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
			} catch (err) {
				console.error("Error fetching data:", err);
				setError("Failed to fetch data.");
				setLoading(false);
			}
		};

		fetchDataFromSupabase();
	}, []);

	return { characters, loading, error };
};
