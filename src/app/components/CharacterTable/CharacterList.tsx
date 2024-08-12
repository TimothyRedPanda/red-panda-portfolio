import CharacterRow from "./CharacterRow";

interface Character {
	firstname: string;
	lastname: string;
	dob: string;
}

interface CharacterListProps {
	characters: Character[];
}

const CharacterList = ({ characters }: CharacterListProps) => {
	console.log("Characters:", characters);

	const validCharacters = characters.filter(
		(item) => item.firstname && item.lastname,
	);

	return validCharacters.length > 0 ? (
		<table className="w-full md:border-separate md:border-spacing-x-4">
			<thead>
				<tr>
					<th className="px-4 py-2 text-left">First Name</th>
					<th className="px-4 py-2 text-left">Last Name</th>
					<th className="px-4 py-2 text-left">DOB</th>
				</tr>
			</thead>
			<tbody>
				{validCharacters.map((item) => (
					<CharacterRow key={item.firstname} character={item} />
				))}
			</tbody>
		</table>
	) : (
		<h1 className="text-center">None Found</h1>
	);
};

export default CharacterList;
