import PrismLoader from "@/components/prism-loader";
import styles from "./code.module.scss"

function CodeSnippet(props : { code : string }) {
    return (
        <main className={styles.code}>
        <pre className="language-jsx">
            <code className="language-jsx">
                {props.code}
            </code>
            <PrismLoader/>
        </pre>
        </main>
    )
}

export default CodeSnippet;