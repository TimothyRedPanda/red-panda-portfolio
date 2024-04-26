"use client";
import { useState } from "react";
import IDE from "../components/IDE/IDE";
import styles from "./python.module.scss";

export default function Typescript() {
	const [code, setCode] = useState("");
	return (
		<main className={styles.main}>
			<div className={styles.codeEditor}>
				<IDE code={setCode} />
			</div>
			{code === "print('Hello World')" ? <p>Hello World</p> : null}
		</main>
	);
}
