import type { Metadata } from "next";
import "./globals.scss";
import Link from "next/link";
import styles from "@/app/typescript/page.module.scss";
import RedPandaLogo from "@/components/red-panda-logo";

export const metadata: Metadata = {
  title: "Red Panda Studio",
  description: "The Portfolio of Timothy Bridge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <nav className="main-nav">
        <RedPandaLogo className="red-panda-logo"/>
      <Link className={styles.link} href="/">Home</Link>
      <Link className={styles.link} href="/javascript">Javascript</Link>
      <Link className={styles.link} href="/html">HTML</Link>
      <Link className={styles.link} href="/css">CSS</Link>
          <Link className={styles.link} href="/typescript">Typescript</Link>
      </nav>
          {children}
      </body>
      </html>
  );
}
