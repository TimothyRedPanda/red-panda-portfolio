type Question = {
	title: string;
	description: string;
	// Use backticks for code examples as they support multi-line strings
	example: string;
	output?: string;
};

const questions: Question[] = [
	{
		title: "const",
		description:
			"A constant variable (const) cannot be reassigned after initialization.",
		example: `const party = "like it's 1999";
console.log(party);`,
		output: "like it's 1999",
	},
	{
		title: "let",
		description: "A variable declared with let can have its value reassigned.",
		example: `let coding = "fun!";
coding = "Depends on your definition...";
console.log(coding);`,
		output: "Depends on your definition...",
	},
	{
		title: "boolean",
		description: "A boolean data type has a value of either true or false.",
		example: `const isCodingFun = true;
console.log(isCodingFun);`,
		output: "true",
	},
	{
		title: "number",
		description:
			"The number data type can represent integers (whole numbers) or floating-point numbers (decimals).",
		example: `const age = 34;
const pi = 3.14;
console.log(age);
console.log(typeof age);
console.log(pi);
console.log(typeof pi);`,
		output: "34\nnumber\n3.14\nnumber",
	},
	{
		title: "string",
		description:
			"A string is a sequence of characters enclosed in single or double quotes.",
		example: `const name = "Timothy";
console.log(name);
console.log(typeof name);`,
		output: "Timothy\nstring",
	},
	{
		title: "object",
		description:
			"An object is a collection of key-value pairs, similar to a digital filing cabinet.",
		example: `const person = { name: "Timothy", age: 34 };
console.log(person.name);`,
		output: "Timothy",
	},
	{
		title: "array",
		description:
			"An array is an ordered list of items, where each item has an index starting from 0.",
		example: `const pandasShop = [ "bamboo seeds", "bamboo stalks", "bamboo leaves", "Mean Girls on VHS" ];
console.log(pandasShop[3]);`,
		output: "Mean Girls on VHS",
	},
];

export default questions;
