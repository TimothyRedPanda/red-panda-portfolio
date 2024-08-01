import questions from "../data/questions.json";

function DataTable() {
	return (
		<table className="border-separate border-spacing-x-4 overflow-scroll">
			<thead>
				<tr>
					<th className="px-4 py-2">Title</th>
					<th className="px-4 py-2">Description</th>
				</tr>
			</thead>
			<tbody>
				{questions.map((item) => (
					<tr key={item.title}>
						<td className="px-4 py-2">{item.title}</td>
						<td className="px-4 py-2">{item.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default DataTable;
