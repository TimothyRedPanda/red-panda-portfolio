import styles from "./index.module.scss";
export default function PandaUI() {
	return (
		<main className={styles.uiWrapper}>
			<iframe
				title="Red Panda UI"
				src="https://664099e473cee1d4b7313e8f-ntyiuyjcbc.chromatic.com/"
				width="100%"
				height="100%"
				style={{ border: "none" }}
			/>
		</main>
	);
}
