import styles from "./page.module.scss";
import Link from 'next/link';
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <p className={styles.mainText}>
          Red <span className={styles.panda}>Panda</span> Studio
        </p>
        <br/>
        <span className={styles.linkContainer}>
           <span>
          <Link className={styles.link} href={"/html"}>HTML</Link>
          </span>
           <span>
          <Link className={styles.link} href={"/css"}>CSS</Link>
          </span>
           <span>
          <Link className={styles.link} href={"/javascript"}>Javascript</Link>
          </span>
           <span>
          <Link className={styles.link} href={"/typescript"}>Typescript</Link>
          </span>
        </span>
      </section>
    </main>
  );
}
