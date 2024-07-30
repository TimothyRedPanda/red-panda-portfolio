type questions_t = { question: string; answer: string; example: string }[];

const questions: questions_t = [
	{
		question: "const",
		answer:
			"A const or constant can be thought of as a container with a label. You can read the label and have a look at what is in side but you can't change the contents. As you can see in this example I have assigned 'like it's 1999' to the variable party. I can not reassign this constant, we will always party like it's 1999:",
		example: 'const party = "like it\'s 1999";',
	},
	{
		question: "let",
		answer:
			"A let on the other hand can be reassigned, we are not locked into the value we assigned it at declaration. As you can see from this example, I am declaring the variable name and then assigning it later on in the code. This would not work with a constant. In the second example I am declaring and assigning the variable problem but I am still able to reassign it later on. Both examples are a valid use of the let key word:",
		example:
			'let name;\nname = "Red Panda";\n\nlet problem = "It\'s me";\nproblem = "I\'m the...";',
	},
	{
		question: "Types of...well, data types",
		answer:
			"Data types tell our computer what...ermmm...type of data it is working with. It is simple as that really. This is important as the computer needs to know these things so it also knows how to handle said data. First up we have strings, these are for text or anything surround by single or double quotes. The quotes is a important distinction as '34' is not a number but a string as it is surround by quote marks. Talking of numbers, these are integers (whole numbers like 2, 43, 2354) or floating-point numbers (numbers with decimal points like 3.2245, -0.5553). Finally we have booleans, these are true or false. Below are some examples written out just for you:",
		example:
			'const string = "string";\n\nconst number = 1;\n\nconst boolean = true;',
	},
	{
		question: "The story so far...",
		answer:
			"Okay I have given you a basic overview of variables and data types. Have a think about what each of the following would be and which could be reassigned or not: ",
		example:
			'const age = 34;\n\nconst name = "Timothy"\n\nlet isLearningCode = true;',
	},
];
export default questions;
