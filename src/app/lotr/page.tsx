import Paragraph from "../components/Paragraph/Paragraph";
import Title from "../components/Title/Title";
import CharacterTable from "../components/CharacterCard/CharacterCard";

const Lotr = () => {
	const aboutTitle: string = "Lord of the Rings API";
	const paraText =
		"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In the Land of Mordor where the Shadows lie.";

	return (
		<main className="pb-20 p-5 w-full h-screen items-center gap-2 flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-amber-400 scrollbar-track-transparent">
			<Title text={aboutTitle} />
			<Paragraph>{paraText}</Paragraph>
			<h2 className="p-5 underline font-bold">Glossary of Characters</h2>
			<CharacterTable />
		</main>
	);
};
export default Lotr;
