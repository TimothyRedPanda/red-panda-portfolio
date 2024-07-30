import questions from "../data/questions";
import PrismLoader from "./PrismLoader";

export default function Questions() {
	const alternateClass = (index: number) =>
		questions.length === 1
			? "bg-blue-400"
			: index % 2 === 0
				? "bg-blue-400 lg:translate-x-1/2 translate-x-0"
				: "bg-amber-500 lg:translate-x-[-50%] translate-x-0";

	return questions.length > 0 ? (
		questions.map((item, index) => {
			const key = index + 1;
			return (
				<section
					className={`flex flex-col gap-1 p-4 rounded-xl shadow-questionShadow  text-slate-950 bg-opacity-65 max-w-lg ${alternateClass(index)}`}
					key={key}
				>
					<h2 className="text-center underline font-bold text-2xl">
						{item.question}
					</h2>
					<p>{item.answer}</p>
					<pre className="code text-left bg-slate-900 text-slate-50 p-2 text-xs md:text-base rounded-md">
						<code className="language-js overflow-auto">{item.example}</code>
					</pre>
					<PrismLoader />
				</section>
			);
		})
	) : (
		<h2>Coming Soon</h2>
	);
}
