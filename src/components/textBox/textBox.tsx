import styles from './textBox.module.scss'

function TextBox(props : {text:string, text2: string}) {
    return (
        <main className={styles.textContainer}>
                <p className={styles.textBox}>{props.text}</p>
                <p className={styles.textBox2}>{props.text2}</p>
        </main>
    )
}

export default TextBox