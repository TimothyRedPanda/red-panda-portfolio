import SpeechBubble from "./components/SpeechBubble/SpeechBubble";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				align="flex-start"
				message="Hey Panda, how do I get a Typescript file to work in my HTML project?"
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message="Platypus! Long time no see!
                  I am assuming you have a index.html and styles.css?"
			/>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				align="flex-start"
				message="Yeah I've got those two, but just wondering where
              to go from here?"
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				typescript="Typescript"
				linkColor="#1D80F7"
				message="First you need to initialise npm in your project then
              we can get sorted with "
				code="npm init"
				codeStyle="language-javascript"
			/>
		</main>
	);
}
