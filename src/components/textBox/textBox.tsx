import styles from './textBox.module.scss'
import TimeStamp from "@/components/timeStamp/timeStamp";

function TextBox(props : {text:string, text2: string, timeStamp:string}) {
    return (
        <main className={styles.textContainer}>
                <p className={styles.textBox}>{props.text}</p>
                <p className={styles.textBox2}>{props.text2}</p>
                <TimeStamp sent={props.timeStamp}/>
        </main>
    )
}

export default TextBox