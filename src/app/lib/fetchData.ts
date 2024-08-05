import { supabase } from "./supabaseClient";

export const fetchData = async (tableName: string) => {
	const { data, error } = await supabase.from(tableName).select("*");
	if (error) {
		console.error("Error fetching data:", error);
		throw new Error(error.message);
	}
	console.log("Fetched data:", data);
	return data;
};
