import styles from "./page.module.scss"
import Link from 'next/link'
export default function Typescript() {
    return (
        <div className={styles.container}>
            <h1>Typescript</h1>
            <Link className={styles.link} href="/">Back Home</Link>
        </div>
    );
}