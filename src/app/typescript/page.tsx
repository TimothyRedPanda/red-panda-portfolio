import SpeechBubble from "@/app/components/SpeechBubble/SpeechBubble";
import styles from "./typescript.module.scss";

export default function Typescript() {
	return (
		<main className={styles.main}>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				align="flex-start"
				message="Oooo new page! So where do we go from here?"
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message="Think it might be a good idea to install Typescript. But you also need a tsconfig.json"
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message=""
				code="tsc --init"
				codeStyle="language-javascript"
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message=""
				code="npm install typescript --save-dev"
				codeStyle="language-javascript"
			/>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				align="flex-start"
				message="Is there a way to install Typescript globally?"
			/>

			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message="This will install it globally for you"
				code="npm install -g typescript"
				codeStyle="language-javascript"
			/>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				align="flex-start"
				message="Ahh that makes sense, do I need to do anything else?"
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message="Well you can't just using Typescript in the browser, sorry about that. It is important to compile it to Javascript."
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message="The easiest way to compile it is to use this command. If you have called your ts file something different from index then use that name."
				codeStyle="language-javascript"
				code="tsc index.ts"
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message="Now if you have followed the steps, Typescript should have compile the ts file into a nice index.js file for you based on the tsconfig.json defaults"
			/>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				align="flex-start"
				message="What about linking it to my HTML and if I want to change the defaults in the config?"
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message="To link it to your HTML we just need to do what you would normally do with a JS file."
				code='<script src="./index.js"></script>'
				codeStyle="language-html"
			/>
			<SpeechBubble
				user="Red Panda"
				align="flex-end"
				message="I'll go through with you the tsconfig.json another time...for now head over to"
				linkColor="#1D80F7"
				types="Types"
			/>
		</main>
	);
}
