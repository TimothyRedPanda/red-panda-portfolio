import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import CharacterTable from "../components/CharacterTable/CharacterTable";

const Lotr = () => {
	const aboutTitle: string = "Lord of the Rings API";
	const paraText =
		"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In the Land of Mordor where the Shadows lie.";

	return (
		<main className="p-6 w-full items-center gap-2 flex flex-col">
			<Title text={aboutTitle} />
			<Paragraph>{paraText}</Paragraph>
			<h2 className="p-5 underline font-bold">Glossary of Characters</h2>
			<CharacterTable />
		</main>
	);
};
export default Lotr;
