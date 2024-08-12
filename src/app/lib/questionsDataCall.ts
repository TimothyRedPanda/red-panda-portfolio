import { fetchData } from "./fetchData";

type Data = {
	title: string;
	description: string;
	example: string;
	output: string;
};

type Character = {
	firstname: string;
	lastname: string;
	dob: string;
};

export async function questions(): Promise<Data[]> {
	let questions: Data[] = [];

	try {
		questions = await fetchData("javascripttips");
	} catch (error) {
		console.error("Error fetching data:", error);
	}

	return questions;
}
