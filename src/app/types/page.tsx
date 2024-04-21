import SpeechBubble from "@/app/components/SpeechBubble/SpeechBubble";
import styles from "./types.module.scss";

export default function Typescript() {
	const usageTypes = `const age: number = 34;
const name: string = "Timothy"
const isDeveloper: boolean = true;`;
	const howTypesHelp = `const digit : string = "34"
const digit2 : string = "64"
function sum(x : number, y : number): number 
{
 return x + y
 }
 sum(digit, digit2)`;
	const helpFinished = `const digit : number = 34
const digit2 : number = 64
function sum(x : number, y : number): number 
{
 return x + y
 }
 sum(digit, digit2)`;

	return (
		<main className={styles.main}>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				message="So types is the word of the day!"
				align="flex-start"
			/>
			<SpeechBubble
				user="Red Panda"
				message="Yes, spot on! Let's get you up to speed, well at least get you use to the three primitive types. We'll get more advance as we go on."
				align="flex-end"
			/>
			<SpeechBubble
				user="Red Panda"
				message="We want to be able to catch those pesky type errors e.g. We declared what we thought was a number but ... oh no! It's actually a string! Now our beautiful page is broken."
				align="flex-end"
			/>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				message="That does sound useful to be fair! What are the three main types then?"
				align="flex-start"
			/>
			<SpeechBubble
				user="Red Panda"
				message="The three primitive types are number, string and boolean...I'll send across some usuages to make it clearer."
				align="flex-end"
			/>
			<SpeechBubble
				user="Red Panda"
				message="Attached are some usage examples."
				codeStyle="language-javascript"
				code={usageTypes}
				align="flex-end"
			/>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				message="That seems quite straight forward but how does it help?"
				align="flex-start"
			/>
			<SpeechBubble
				user="Red Panda"
				message="How does it help?! Well I am glad you asked. Say you tried to assign a string variable to something that was expecting a type?"
				codeStyle="language-javascript"
				code={howTypesHelp}
				align="flex-end"
			/>
			<SpeechBubble
				user="Red Panda"
				message='Dangerous times - it seems in our eagerness we have assigned a string "34" to what should be a number. In these few lines of code it may be easier to bug fix but imagine if we had a huge code base!'
				align="flex-end"
			/>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				message="Ahh so Typescript helps defend against such goings on?"
				align="flex-start"
			/>
			<SpeechBubble
				user="Red Panda"
				message="Yes you are right on the money, in our simple little example we would get an error like this"
				codeStyle="language-typescript"
				code="Argument of type string is not assignable to parameter of type number"
				align="flex-end"
			/>
			<SpeechBubble
				user="Red Panda"
				message="Allowing us to know where we went wrong and correct it"
				codeStyle="language-javascript"
				code={helpFinished}
				align="flex-end"
			/>
			<SpeechBubble
				user="Platypus"
				bgColor="#1D80F7"
				message="A subtle change but I can see now why that would be mega useful"
				align="flex-start"
			/>
		</main>
	);
}
