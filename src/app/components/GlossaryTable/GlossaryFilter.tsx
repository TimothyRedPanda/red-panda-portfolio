import { z } from "zod";
import DOMPurify from "dompurify";
import { Input } from "ui-redpanda";

interface Data {
	title: string;
	description: string;
	example: string;
	output: string;
}

interface GlossaryFilterProps {
	setFilter: (filter: string) => void;
	questions: Data[];
	filteredQuestions: Data[];
	numberResults: string;
}

const GlossaryFilter = ({
	setFilter,
	questions,
	filteredQuestions,
	numberResults,
}: GlossaryFilterProps) => {
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

	return (
		<span className="w-full md:flex flex-row gap-2 hidden">
			<select className="py-2 px-4" onChange={handleSelectChange}>
				<option value="" className="py-2 px-4">
					All
				</option>
				{questions.map((option) => (
					<option key={option.title} className="py-2 px-4" value={option.title}>
						{option.title}
					</option>
				))}
			</select>
			<Input
				type="text"
				defaultValue="Search..."
				onChange={handleSelectChange}
				sanitized
			/>
			<p className="h-full items-center flex">
				{filteredQuestions.length > 0
					? `${filteredQuestions.length} items found`
					: numberResults}
			</p>
		</span>
	);
};

export default GlossaryFilter;
