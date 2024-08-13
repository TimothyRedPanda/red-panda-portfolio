import CharacterRow from "./CharacterRow";

interface Character {
	firstname: string;
	lastname: string;
	race: string;
	dob: string;
	title: string;
	description: string;
	uuid: string;
}

interface CharacterListProps {
	characters: Character[];
}

const CharacterList = ({ characters }: CharacterListProps) => {
	console.log("Characters:", characters);

	const validCharacters = characters.filter((item) => item.uuid);

	return validCharacters.length > 0 ? (
		<>
			<main className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid p-4 gap-10 w-full">
				{validCharacters.map((item) => (
					<CharacterRow key={item.uuid} character={item} />
				))}
			</main>
		</>
	) : (
		<h1 className="text-center">None Found</h1>
	);
};

export default CharacterList;
