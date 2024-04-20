'use client'
import styles from './SpeechBubble.module.scss'
import CodeSnippet from "../CodeSnippet/CodeSnippet"
import Link from "next/link";
import TimeStamp from "../TimeStamp/TimeStamp";
import { motion } from "framer-motion";

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
        <motion.div
            className={styles.speechBubble}
            style={{backgroundColor:props.bgColor
                    || "#F7941D",
                    alignSelf:props.align
                    || "center"
            }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileHover={{ cursor : "grab", zIndex: 1 }}
            whileTap={{ cursor: "grabbing", scale: 1.2 }}
        >
            {props.message}
            <Link style={{color : props.linkColor || "#fff"}} className={styles.link} href="/">{props.home}</Link>
            <Link style={{color : props.linkColor || "#fff"}} className={styles.link} href="/typescript/">{props.typescript}</Link>
            <br/>
            {props.code && <CodeSnippet code={props.code} codeStyle={props.codeStyle} />}
            <TimeStamp user={props.user} />
        </motion.div>
    )
}

export default SpeechBubble;