import PrismLoader from "@/components/prism-loader";
import styles from "./code.module.scss"

function CodeSnippet(props : { code : string }) {
    return (
        <main className={styles.code}>
        <pre className="language-javascript">
            <code className="language-javascript">
                {props.code}
            </code>
        </pre>
            <PrismLoader/>
        </main>
    )
}

export default CodeSnippet;