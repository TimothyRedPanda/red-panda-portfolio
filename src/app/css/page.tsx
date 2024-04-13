import styles from './page.module.css'
import Link from 'next/link'
export default function Typescript() {
    return (
        <div className={styles.container}>
            <h1>CSS</h1>
            <Link className={styles.link} href="/">Back Home</Link>
        </div>
    );
}