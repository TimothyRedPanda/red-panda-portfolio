import styles from "./page.module.scss"
import CodeSnippet from "@/components/codeSnippet/codeSnippet";
import TextBox from "@/components/textBox/textBox"
import PrismLoader from "@/components/prism-loader";
const compileText =
    `/* Example tsconfig.json contents */
{
"compilerOptions" : {
    "target" : "es2016
    "module" : "NodeNext",
    "rootDir" : ".src",
    "outDir" : "./src",
    "noEmitOnError" : true,
    "esModuleInterop" : true,
    "resolveJsonModule" : true,
    "forceConsistentCasingInFileNames" : true,
    "strict" : true,
    "skipLibCheck" : true
    },
    "include" : ["src/**/*"]
}`
export default function Typescript() {
    return (
        <div className={styles.container}>
            <h1>Typescript</h1>
            <TextBox text="How do I install typescript? 🔥"
                     text2="Using the below code 🐸🐸"
            />
            <CodeSnippet code="npm install typescript --save-dev" />
            <TextBox text="❤️Thanks but I wanted to install it globally?"
                     text2="No worries, here ya go 😎"
            />
            <CodeSnippet code="npm install -g typescript" />
            <TextBox text="Legend!! What about compiling it?❤️"
                     text2="I ain't google you know! But that said...
                            this will create a tsconfig.json 😑"
            />
            <CodeSnippet code="tsc --init" />
            <CodeSnippet code={compileText}/>
            <TextBox text="I am all set up now...how do I compile? 😎😎"
                     text2="In your package.json you need this line
                           followed by using the npm command 👌"
            />
            <CodeSnippet code='"build" : "tsc"'/>
            <CodeSnippet code="npm build tsc"/>
            <TextBox text="Thanks so much for this! ❤️"
                     text2="Ahh I almost forgot - remember to import the index.js into your HTML! 🖥️"
            />
            <PrismLoader/>
        </div>
    );
}