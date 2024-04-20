import PrismLoader from "../PrismLoader/PrismLoader";
import styles from "./CodeSnippet.module.scss"

function CodeSnippet(props : { code : string, codeStyle ? : string }) {
    return (
        <main className={styles.CodeSnippet}>
        <pre className={props.codeStyle}>
            <code className={props.codeStyle}>
                {props.code}
            </code>
        </pre>
            <PrismLoader/>
        </main>
    )
}

export default CodeSnippet;