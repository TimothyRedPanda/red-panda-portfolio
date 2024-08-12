import { capitalizeWords } from "../../../utils/capitalizeWords";

interface Character {
	firstname: string;
	lastname: string;
	dob: string;
}

interface CharacterRowProps {
	character: Character;
}

const CharacterRow = ({ character }: CharacterRowProps) => {
	return (
		<tr>
			<td className="px-4 py-2">{capitalizeWords(character.firstname)}</td>
			<td className="px-4 py-2">{capitalizeWords(character.lastname)}</td>
			<td className="px-4 py-2">{character.dob}</td>
		</tr>
	);
};

export default CharacterRow;
