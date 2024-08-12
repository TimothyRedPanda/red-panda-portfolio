import GlossaryRow from "./GlossaryRow";

interface Data {
	title: string;
	description: string;
	example: string;
	output: string;
}

interface GlossaryListProps {
	questions: Data[];
}

const GlossaryList = ({ questions }: GlossaryListProps) => {
	console.log("Questions:", questions);

	const validQuestions = questions.filter(
		(item) => item.title && item.description,
	);

	return validQuestions.length > 0 ? (
		<table className="md:border-separate md:border-spacing-x-4">
			<thead>
				<tr>
					<th className="px-4 py-2 text-left">Title</th>
					<th className="px-4 py-2 text-left">Description</th>
				</tr>
			</thead>
			<tbody>
				{validQuestions.map((item) => (
					<GlossaryRow key={item.title} question={item} />
				))}
			</tbody>
		</table>
	) : (
		<h1 className="text-center">None Found</h1>
	);
};

export default GlossaryList;
