import styles from "./timeStamp.module.scss";

function TimeStamp(props : { sent : string}) {
    return (
        <main className={styles.container}>
        <span className={styles.online}></span>
        <p className={styles.stamp}>{props.sent}</p>
        </main>
    )
}

export default TimeStamp;