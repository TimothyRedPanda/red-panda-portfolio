"use client";
import QuizQuestions from "@/app/components/QuizQuestions/QuizQuestions";
import styles from "./python.module.scss";

export default function Typescript() {
	const quizQuestions = [
		{
			question:
				"Can you declare a variable called learn and assign it the string python? - I don't mind if you use single or double quotes.",
			answer: "Correct - learn = \"python\" or learn = 'python'",
			regexp: /^learn\s*=\s*"python"\s*$/,
		},
		{
			question:
				"Can you declare a variable called invented and assign it the integer 1991?",
			answer: "Correct - invented = 1991 ",
			regexp: /^\s*invented\s*=\s*1991\s*;?\s*$/,
		},
	];
	return (
		<main className={styles.main}>
			<QuizQuestions
				question={quizQuestions[0].question}
				correct={quizQuestions[0].answer}
				regex={quizQuestions[0].regexp}
			/>
			<QuizQuestions
				question={quizQuestions[1].question}
				correct={quizQuestions[1].answer}
				regex={quizQuestions[1].regexp}
			/>
		</main>
	);
}
