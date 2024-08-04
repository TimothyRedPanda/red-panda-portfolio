"use client";
import { z } from "zod";
import DOMPurify from "dompurify";
import questions from "../data/questions.json";
import { useState } from "react";

function GlossaryTable() {
	const [filter, setFilter] = useState("");
	const [numberResults, setNumberResults] = useState("");

	const filteredQuestions = questions.filter((item) => {
		return filter
			? item.title.toLowerCase().includes(filter.toLowerCase())
			: null;
	});

	const userInput = z.string().trim();

	interface handleSelectchange {
		target: { value: string };
	}

	const handleSelectChange = (event: handleSelectchange) => {
		try {
			userInput.parse(event.target.value);
		} catch (error) {
			console.error("That ain't a string, validation error", error);
			return;
		}

		const sanitizeInput = DOMPurify.sanitize(event.target.value);
		setFilter(sanitizeInput);
	};

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
					defaultValue="search..."
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
}

export default GlossaryTable;
