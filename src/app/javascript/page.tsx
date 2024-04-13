import styles from './page.module.css'
import Link from 'next/link'
export default function Typescript() {
    return (
        <div className={styles.container}>
            <h1>Javascript</h1>
            <Link href="/">Back Home</Link>
        </div>
    );
}