import styles from "./page.module.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <p className={styles.mainText}>
          Red <span className={styles.panda}>Panda</span> Studio
        </p>
      </section>
    </main>
  );
}
