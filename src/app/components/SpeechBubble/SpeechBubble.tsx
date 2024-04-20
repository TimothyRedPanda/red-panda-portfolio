import styles from './SpeechBubble.module.scss'
import CodeSnippet from "../CodeSnippet/CodeSnippet"
import Link from "next/link";
import TimeStamp from "../TimeStamp/TimeStamp";

function SpeechBubble(props :
                          {   message : string,
                              bgColor? : string,
                              align? : string,
                              user : string,
                              home? : string,
                              typescript ? : string,
                              linkColor ? : string,
                              code ? : string,
                              codeStyle ? : string
                          }) {
    return(
        <main
            className={styles.speechBubble}
            style={{backgroundColor:props.bgColor
                    || "#F7941D",
                    alignSelf:props.align
                    || "center"
            }}>
            {props.message}
            <Link style={{color : props.linkColor || "#fff"}} className={styles.link} href="/">{props.home}</Link>
            <Link style={{color : props.linkColor || "#fff"}} className={styles.link} href="/typescript/">{props.typescript}</Link>
            <br/>
            {props.code && <CodeSnippet code={props.code} codeStyle={props.codeStyle} />}
            <TimeStamp user={props.user} />
        </main>
    )
}

export default SpeechBubble;