"use client";
import IDE from "@/app/components/IDE/IDE";
import { useState } from "react";
import styles from "./QuizQuestions.module.scss";

export default function QuizQuestions(props: {
	question: string;
	correct: string;
	regex: RegExp;
}) {
	const [code, setCode] = useState("");
	const [check, setCheck] = useState("");
	return (
		<>
			<div className={styles.codeEditor}>
				<p className={styles.question}>{props.question}</p>
				<div className={styles.code}>
					<IDE code={setCode} />
				</div>
				<button
					style={
						check === "correct" ? { display: "none" } : { display: "initial" }
					}
					className={styles.button}
					onClick={() => {
						code.length > 0
							? props.regex.test(code)
								? (() => {
										setCheck("correct");
									})()
								: (() => {
										setCheck("incorrect");
									})()
							: code.length === 0
								? setCheck("Please enter an answer")
								: null;
					}}
					type="button"
				>
					Submit
				</button>

				{check === "correct" ? (
					<p className={styles.answer} style={{ color: "green" }}>
						{props.correct}
					</p>
				) : check === "incorrect" ? (
					<p className={styles.answer} style={{ color: "red" }}>
						Not quite right - try again
					</p>
				) : (
					<p className={styles.answer}>{check}</p>
				)}
			</div>
		</>
	);
}
