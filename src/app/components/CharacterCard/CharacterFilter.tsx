import { z } from "zod";
import DOMPurify from "dompurify";
import { capitalizeWords } from "../../../utils/capitalizeWords";
import { Input } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

interface Character {
	firstname: string;
	lastname: string;
	race: string;
	dob: string;
	title: string;
	description: string;
	uuid: string;
}

interface CharacterFilterProps {
	setFilter: (filter: string) => void;
	characters: Character[];
	filteredCharacters: Character[];
	numberResults: string;
}

const CharacterFilter = ({
	setFilter,
	characters,
	filteredCharacters,
	numberResults,
}: CharacterFilterProps) => {
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
		<span className="w-full flex-row gap-2 flex">
			<select className="py-2 px-4" onChange={handleSelectChange}>
				<option value="" className="py-2 px-4">
					All
				</option>
				{characters.map((option) => (
					<option
						key={option.uuid}
						className="py-2 px-4"
						value={option.firstname}
					>
						{capitalizeWords(option.firstname)}
					</option>
				))}
			</select>
			<Input
				type="text"
				defaultValue="Search..."
				onChange={handleSelectChange}
			/>
			<p className="h-full md:flex items-center hidden">
				{filteredCharacters.length > 0
					? `${filteredCharacters.length} items found`
					: numberResults}
			</p>
		</span>
	);
};

export default CharacterFilter;
