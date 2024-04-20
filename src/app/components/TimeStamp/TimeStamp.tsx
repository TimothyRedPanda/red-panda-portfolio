'use client'
import styles from './TimeStamp.module.scss'
import { motion } from 'framer-motion'

function TimeStamp(props : { user : string }) {
    return(
        <main className={styles.timeStamp}>
            <span className={styles.user}>
                <motion.span
                    animate={{scale:1.2}}
                    initial={{scale:1}}
                    transition={{ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className={styles.indicator}
                />{props.user}
            </span>
        </main>
    )
}

export default TimeStamp