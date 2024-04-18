import styles from './textBox.module.scss'

function TextBox(props : {text:string, text2: string}) {
    return (
        <main className={styles.textContainer}>
            <span className={styles.speechBubble}>
                <p className={styles.textBox}>{props.text}</p>
            </span>
            <span className={styles.speechBubble2}>
                <p className={styles.textBox2}>{props.text2}</p>
            </span>
        </main>
    )
}

export default TextBox