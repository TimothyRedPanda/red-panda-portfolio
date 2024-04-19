import styles from "./page.module.scss"
import CodeSnippet from "@/components/codeSnippet/codeSnippet";
import TextBox from "@/components/textBox/textBox"
import PrismLoader from "@/components/prism-loader";
const basicTypes =
    `const age : number = 18;
const name : string = "Red Panda";
const isFluffy : boolean = true;`
const unionTypes = `let age : number | string = 18
age = "18"`

export default function Typescript() {
    return (
        <div className={styles.container}>
            <h2>Types</h2>
            <section className={styles.imessage}>
                <TextBox text="What are the different types?"
                         text2="Hey, no hello? Just right in with the questions!
                         The main types you will come across as a beginner are -
                         numbers, booleans and strings...but we can go through usages."
                         timeStamp="Red Panda"
                />
            </section>
            <section className={styles.imessage}>
                <TextBox text="Ahh sorry - Hello, hope you are doing good?"
                         text2="I'm good thanks, you? Anyways here are some
                         usages of the three basic types. I can send you some
                         harder stuff a bit later."
                         timeStamp="Red Panda"
                />
                <CodeSnippet code={basicTypes}/>
            </section>
            <section className={styles.imessage}>
                <TextBox text="But what if I know the type could either be one or the other...
                for instance - a string or a number?"
                         text2='Ahh that requires a union, which is similar to "or" in Javascript'
                         timeStamp="Red Panda"
                />
                <CodeSnippet code={unionTypes}/>
            </section>
            <PrismLoader/>
        </div>
    );
}