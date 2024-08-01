import Paragraph from "../components/Paragraph";
import Link from "next/link";
import Title from "../components/Title";
import MyTable from "../components/Table";

export default function About() {
	const aboutTitle: string = "About Red Panda Studio";
	const paraText =
		"Well, hello there. " +
		"I'm Timothy (sorry to tell you my name is not Red Panda). " +
		"This little old Next.js project is not only for me to share" +
		" my coding journey but also to help other developers thrive " +
		"as well. I will be sharing tips, tricks, and other words of" +
		" wisdom from this noggin. Thanks for taking a look and watch " +
		"this space as I expanda it. If you have any questions, then " +
		"head over to ";

	return (
		<main className="p-6 w-full items-center gap-2 flex flex-col">
			<Title text={aboutTitle} />
			<Paragraph>
				{paraText}
				<Link className="hover:text-slate-400 underline" href="../contact">
					{" "}
					contact.
				</Link>
			</Paragraph>
			<h2 className="p-5 underline font-bold">Glossary of terms</h2>
			<MyTable />
		</main>
	);
}
