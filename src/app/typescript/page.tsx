import styles from "./page.module.scss"
import PrismLoader from "@/components/prism-loader"
import Link from 'next/link'
export default function Typescript() {
    const objectType = `type animal : {name: string, age: number, isCool : boolean};`
    const exampleObject =`let panda : animal = {name: "panda", age: 3, isCool : true};`
    const paraTypes = 'function sum(x : number, y : number) : number {};'
    return (
        <div className={styles.container}>
            <h1>Typescript</h1>
            <pre className="language-ts" style={{width: "80vw"}}>
                <code className="language-ts">
                    let age : number = 3;
                </code>
                <br/>
                <br/>
                <code className="language-ts">
                    let name : string = "Red Panda";
                </code>
                <br/>
                <br/>
                <code className="language-ts">
                    let isCool : boolean = true;
                </code>
                <br/>
                <br/>
                <code className="language-ts">
                    let animals : string[] = ["panda", "frog", "dog", "cat"];
                </code>
                <br/>
                <code className="language-ts">
                    let animals : [string, number, boolean] = ["Panda", 3, true]
                </code>
                <br/>
                <br/>
                <code className="language-ts">
                    {objectType}
                </code>
                <br/>
                <code className="language-ts">
                    {exampleObject}
                </code>
                <br/>
                <br/>
                <code className="language-ts">
                    {paraTypes}
                </code>
                <br/>
                <br/>
                <code className="language-ts">
                let age : (string | number) = "34" or 34;
                </code>
            </pre>
            <Link className={styles.link} href="/">Back Home</Link>
            <PrismLoader/>
        </div>
    );
}