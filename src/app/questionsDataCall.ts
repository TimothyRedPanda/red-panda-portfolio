import { fetchData } from "./lib/fetchData";

type Data = {
	title: string;
	description: string;
	example: string;
	output: string;
};

export default async function questions() {
	let questions: Data[] = [];

	try {
		questions = await fetchData("javascripttips");
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
