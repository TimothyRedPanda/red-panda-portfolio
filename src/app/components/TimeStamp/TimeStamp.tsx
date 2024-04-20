import styles from './TimeStamp.module.scss'

function TimeStamp(props : { user : string }) {
    return(
        <main className={styles.timeStamp}>
            <span className={styles.user}><span className={styles.indicator}/>{props.user}</span>
        </main>
    )
}

export default TimeStamp