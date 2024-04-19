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
            <h2>Installing Typescript</h2>
            <section className={styles.imessage}>
                <TextBox text="How do I set-up Typescript in a non-ReactJS project?"
                         text2="
                     First things first set-up your folder structure - index.html
                     and styles.css files. Then you need two folders a src and a build.
                     The src will house your index.ts file and we will need the
                     build folder later. When you have these two folders and three
                     files you can move onto installing. This npm command will initialise
                     NPM in your project."
                         timeStamp="Red Panda"
                />
                <CodeSnippet code="npm init"/>
            </section>

            <section className={styles.imessage}>
                <TextBox text="How do I install Typescript?"
                         text2="
                     To install Typescript in your project as a dev dependency
                     use the following command."
                         timeStamp="Red Panda"
                />
                <CodeSnippet code="npm install typescript --save-dev"/>
            </section>
            <section className={styles.imessage}>
                <TextBox text="If I wanted to install it globally?"
                         text2="Installing it globally is pretty simple as well, just need
                     to change up your command."
                         timeStamp="Red Panda"
                />

                <CodeSnippet code="npm install -g typescript"/>
            </section>
            <section className={styles.imessage}>
                <TextBox text="Legend! Thanks a lot!"
                         text2="Don't forget we need to be able to compile it
                     in order to use it in the browser! This command will
                     set up a tsconfig.json for you. The second code snippet is
                     an example of what to have in your config."
                         timeStamp="Red Panda"
                />

                <CodeSnippet code="tsc --init"/>
                <CodeSnippet code={compileText}/>
            </section>
            <section className={styles.imessage}>
                <TextBox text="I've set that all up, including the config...anything else?"
                         text2="In the scripts section of your package.json you need to write
                     this first snippet. Then after you've saved run the npm command."
                         timeStamp="Red Panda"
                />
                <CodeSnippet code='"build" : "tsc"'/>
                <CodeSnippet code="npm run build"/>
            </section>
            <section className={styles.imessage}>
                <TextBox text="Thanks so much for this! ❤️"
                         text2="No worries, if the Typescript config is setup like I showed you
                     then the build command should compile a index.js file inside the build
                     folder."
                         timeStamp="Red Panda"
                />
            </section>
            <section className={styles.imessage}>
                <TextBox text="Anything else?"
                         text2="One final thing - to use your newly compiled index.js remember
                         to reference it in your html file - using a script tag. Remember to
                         add the script tag before the closing body tag."
                         timeStamp="Red Panda"
                />
                <CodeSnippet code='<script src="./build" type="module"></script>'/>
            </section>
            <PrismLoader/>
        </div>
    );
}