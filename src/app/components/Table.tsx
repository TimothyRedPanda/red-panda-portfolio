"use client";
import { z } from "zod";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";
import { fetchData } from "../lib/fetchData"; // Adjust the import path as needed

interface Data {
	title: string;
	description: string;
	example: string;
	output: string;
}

const GlossaryTable = () => {
	const [filter, setFilter] = useState<string>("");
	const [numberResults, setNumberResults] = useState<string>("");
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

	const filteredQuestions = questions.filter((item) => {
		return filter
			? item.title.toLowerCase().includes(filter.toLowerCase())
			: true; // Use `true` to include all items when no filter is applied
	});

	const userInput = z.string().trim();

	interface HandleSelectChange {
		target: { value: string };
	}

	const handleSelectChange = (event: HandleSelectChange) => {
		try {
			userInput.parse(event.target.value);
		} catch (error) {
			console.error("Validation error", error);
			return;
		}

		const sanitizeInput = DOMPurify.sanitize(event.target.value);
		setFilter(sanitizeInput);
	};

	if (loading) {
		return <h1 className="place-self-center text-3xl">Loading...</h1>;
	}

	if (error) {
		return <h1 className="place-self-center text-3xl">{error}</h1>;
	}

	return (
		<main className="w-screen p-4 md:p-10">
			<span className="w-full flex flex-row gap-2">
				<select className="p-2" onChange={handleSelectChange}>
					<option value="">All</option>
					{questions.map((option) => (
						<option key={option.title} value={option.title}>
							{option.title}
						</option>
					))}
				</select>
				<input
					className="p-2"
					type="text"
					placeholder="Search..."
					onChange={handleSelectChange}
				/>
				<p className="h-full flex items-center">
					{filter ? `${filteredQuestions.length} items found` : numberResults}
				</p>
			</span>
			{filteredQuestions.length > 0 ? (
				<table className="md:border-separate md:border-spacing-x-4">
					<thead>
						<tr>
							<th className="px-4 py-2">Title</th>
							<th className="px-4 py-2">Description</th>
						</tr>
					</thead>
					<tbody>
						{filteredQuestions.map((item) => (
							<tr key={item.title}>
								<td className="px-4 py-2">{item.title}</td>
								<td className="px-4 py-2">{item.description}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : questions.length > 0 ? (
				<table className="md:border-separate md:border-spacing-x-1">
					<thead>
						<tr>
							<th className="px-4 py-2">Title</th>
							<th className="px-4 py-2">Description</th>
						</tr>
					</thead>
					<tbody>
						{questions.map((item) => (
							<tr key={item.title}>
								<td className="px-4 py-2">{item.title}</td>
								<td className="px-4 py-2">{item.description}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<h1>Coming Soon</h1>
			)}
		</main>
	);
};

export default GlossaryTable;
