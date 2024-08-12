import { useState, useEffect } from "react";
import { fetchData } from "../app/lib/fetchData";

interface Data {
	title: string;
	description: string;
	example: string;
	output: string;
}

export const useFetchGlossary = () => {
	const [questions, setQuestions] = useState<Data[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDataFromSupabase = async () => {
			try {
				const data = await fetchData("javascripttips");
				setQuestions(data);
				setLoading(false);
			} catch (err) {
				console.error("Error fetching data:", err);
				setError("Failed to fetch data.");
				setLoading(false);
			}
		};

		fetchDataFromSupabase();
	}, []);

	return { questions, loading, error };
};