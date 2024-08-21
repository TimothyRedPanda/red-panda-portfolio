import { useState, useEffect } from "react";
import { fetchData } from "../lib/fetchData";

const useFetchData = (endpoint: string) => {
	const [data, setData] = useState<Array<[]>>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDataFromSupabase = async () => {
			try {
				const result = await fetchData(endpoint);
				setData(result);
				setLoading(false);
			} catch (err) {
				console.error("Error fetching data:", err);
				setError("Failed to fetch data.");
				setLoading(false);
			}
		};

		fetchDataFromSupabase();
	}, [endpoint]);

	return { data, loading, error };
};

export default useFetchData;
