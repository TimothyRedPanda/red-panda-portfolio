import { capitalizeWords } from "../../utils/capitalizeWords";

interface Character {
	firstname: string;
	lastname: string;
	race: string;
	dob: string;
	title: string;
	description: string;
	uuid: string;
}

interface CharacterRowProps {
	character: Character;
}

const CharacterRow = ({ character }: CharacterRowProps) => {
	return (
		<main className="flex flex-col gap-2 shadow-questionShadow rounded-md hover:scale-105 transition-all card hover:z-10">
			<span className="p-2 bg-amber-400 font-bold text-slate-700 rounded-t-md">
				{capitalizeWords(character.firstname)} {"\n"}
				{character.lastname ? capitalizeWords(character.lastname) : "Unknown"}
			</span>
			<span className="p-2">Race: {character.race}</span>
			<span className="p-2">DOB: {character.dob}</span>
			<span className="p-2">Title: {character.title}</span>
			<span className="p-2">{character.description}</span>
		</main>
	);
};

export default CharacterRow;
