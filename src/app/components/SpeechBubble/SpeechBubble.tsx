"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import TimeStamp from "../TimeStamp/TimeStamp";
import styles from "./SpeechBubble.module.scss";

function SpeechBubble(props: {
	message: string;
	bgColor?: string;
	align?: string;
	user: string;
	home?: string;
	typescript?: string;
	linkColor?: string;
	code?: string;
	codeStyle?: string;
}) {
	return (
		<motion.div
			className={styles.speechBubble}
			style={{
				backgroundColor: props.bgColor || "#F7941D",
				alignSelf: props.align || "center",
			}}
		>
			{props.message}
			<Link
				style={{ color: props.linkColor || "#fff" }}
				className={styles.link}
				href="/"
			>
				{props.home}
			</Link>
			<Link
				style={{ color: props.linkColor || "#fff" }}
				className={styles.link}
				href="/typescript/"
			>
				{props.typescript}
			</Link>
			<br />
			{props.code && (
				<CodeSnippet code={props.code} codeStyle={props.codeStyle} />
			)}
			<TimeStamp user={props.user} />
		</motion.div>
	);
}

export default SpeechBubble;
