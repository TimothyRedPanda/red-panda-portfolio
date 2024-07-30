import Title from "../components/Title";
import ContactLogic from "../components/ContactLogic";

export default function Contact() {
	const contactTitle: string = "Contact";
	return (
		<main className="p-6 items-center gap-2 flex flex-col h-full w-full">
			<Title text={contactTitle} />
			<ContactLogic />
		</main>
	);
}
