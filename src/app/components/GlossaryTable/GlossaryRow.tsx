import { capitalizeWords } from "../../../utils/capitalizeWords";

interface Data {
	title: string;
	description: string;
	example: string;
	output: string;
}

interface GlossaryRowProps {
	question: Data;
}

const GlossaryRow = ({ question }: GlossaryRowProps) => {
	return (
		<tr>
			<td className="px-4 py-2">
				{capitalizeWords(question.title)}
			</td>
			<td className="px-4 py-2">
				{capitalizeWords(question.description)}
			</td>
		</tr>
	);
};

export default GlossaryRow;
