type questions_t = { question: string; answer: string }[];

const questions: questions_t = [
	{
		question: "What is a variable?",
		answer:
			"You can think of a variable as a box to store your data, each box having its own label. You declare a variable and assign a value or build your box and place your data inside it.",
	},
	{
		question: "What is the difference between const and let?",
		answer:
			"Well, const mean constant so cannot be reassigned. But let on the other hand can be, think of it as let or letting you be able to reassign the variable. Or in simpler terms, taking the box that stores your data and switching out the data for new data.",
	},
	{
		question: "What do you mean by reassigned?",
		answer: "You can think of reassigning or having a variable be reassigned as keeping the same label on the box but switching out the contents."
	}
];
export default questions;
