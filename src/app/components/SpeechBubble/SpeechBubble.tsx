"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
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
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<motion.div
			ref={ref}
			variants={{
				hidden: { opacity: 0, x: 75 },
				visible: { opacity: 1, x: 0 },
			}}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			transition={{ duration: 0.5 }}
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
