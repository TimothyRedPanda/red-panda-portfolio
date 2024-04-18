import styles from "./page.module.scss"
import CodeSnippet from "@/components/codeSnippet/codeSnippet";
import TextBox from "@/components/textBox/textBox"
export default function Typescript() {
    return (
        <div className={styles.container}>
            <h1>Typescript</h1>
            <TextBox text="How do I install typescript?🐸" text2="Using the below code👍"/>
            <CodeSnippet code="npm install typescript --save-dev" />
            <TextBox text="❤️Thanks but I wanted to install it globally?" text2="No worries, here ya go 😎"/>
            <CodeSnippet code="npm install -g typescript" />
            <TextBox text="Legend!! What about compiling it?❤️" text2="I ain't google you know! But that said..."/>
            <CodeSnippet code="npm install -g typescript" />
        </div>
    );
}