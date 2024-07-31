import questions from "../data/questions";
import PrismLoader from "./PrismLoader";

function getRandomQuestion() {
	return questions[Math.floor(Math.random() * questions.length)];
}

export default function Questions() {
	const question = getRandomQuestion();

	if (!question) {
		return <h2>Coming Soon</h2>;
	}

	const { title, description, example, output } = question;

	return (
		<section
			className="flex flex-col gap-1 p-4 rounded-xl shadow-questionShadow w-full text-white bg-slate-900"
			key={title}
		>
			<h2 className="text-center underline font-bold text-2xl">{title}</h2>
			<p>{description}</p>
			<pre className="code line-numbers bg-slate-900 text-slate-50 p-2 text-xs md:text-base rounded-md">
				<code className="language-js">{example}</code>
			</pre>
			<p className={output ? "" : "hidden"}>Output:</p>
			<pre
				className={
					output
						? "command-line language-command-line bg-slate-900 text-slate-50 p-2 text-xs md:text-base rounded-md"
						: "hidden"
				}
				data-user="Red Panda"
				data-host="studio"
			>
				<code>{output}</code>
			</pre>
			<PrismLoader />
		</section>
	);
}
