type questions_t = {
	title: string;
	description: string;
	example: string;
	output?: string;
}[];

const questions: questions_t = [
	{
		title: "const",
		description: "A const or constant - cannot have its value be reassigned.",
		example: 'const party = "like it\'s 1999";\nconsole.log(party);',
		output: "like it's 1999",
	},
	{
		title: "let",
		description: "A let can have its value reassigned.",
		example:
			'let coding = "fun!";\ncoding = "Depends on your definition...";\nconsole.log(coding);',
		output: "Depends on your definition...",
	},
	{
		title: "boolean",
		description:
			"A boolean is a data type that has a value of either true or false.",
		example: "const isCodingFun = true;\nconsole.log(isCodingFun);",
		output: "true",
	},
	{
		title: "number",
		description:
			"A number can either be a a interger (whole number) or a floating-point (number with decimal point).",
		example:
			"const age = 34;\nconst pi = 3.14;\nconsole.log(age);\nconsole.log(typeof age);\nconsole.log(pi);\nconsole.log(typeof pi);",
		output: "34\nnumber\n3.14\nnumber",
	},
	{
		title: "string",
		description:
			"A string is a series of characters surrounded by either double or single quotes",
		example:
			'const name = "Timothy";\nconsole.log(name);\nconsole.log(typeof name);',
		output: "Timothy\nstring",
	},
	{
		title: "object",
		description:
			"A digital filing cabinet with keys (labels) and values (files or data).",
		example:
			'const person =\n{\nname : "Timothy",\nage : 34\n};\nconsole.log(person.name);',
		output: "Timothy",
	},
	{
		title: "array",
		description:
			"Like a numbered shopping list. Each item has an index starting at index 0",
		example:
			'const pandasShop = [\n"bamboo seeds",\n"bamboo stalks",\n"bamboo leaves",\n"Mean Girls on VHS"\n];\nconsole.log(pandasShop[3]);',
		output: "Mean Girls on VHS",
	},
	{
		title: "accessing and modifying array items",
		description: "How to access and change individual items in your array.",
		example:
			'const meanGirlsChar = [\n"Gretchen",\n"Regina",\n"Karen",\n"Cady"\n];\nconsole.log(meanGirlsChar.length);\nconsole.log(meanGirlsChar[1]);\nmeanGirlsChar[2] = "Damien";\nconsole.log(meanGirlsChar);',
		output: '4\nRegina\n["Gretchen", "Regina", "Damien", "Cody"]',
	},
];
export default questions;
