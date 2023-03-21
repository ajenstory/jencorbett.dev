
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Card from "../components/card";
import Header from "../components/header";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Header home />
      <div className={styles}>
        <h1 className={inter.className}>Hello</h1>
        <div>
          <p className={inter.className}>
            Hi! I'm a developer with a digital marketing background. I'm
            currently working on my portfolio, and can't wait to share more
            stuff with you here soon!
          </p>
        </div>{" "}
      </div>
      <div>
        <div className={styles.card.p}></div>
      </div>
      <div className={styles.grid}>
        <Card>
          <Link href="/projects">
            <h2 className={inter.className}>
              Projects<span>-&gt;</span>
            </h2>
            <p className={inter.className}>see more</p>
          </Link>
        </Card>
        <Card>
          <Link href="/posts">
            <h2 className={inter.className}>
              Diaries <span>-&gt;</span>
            </h2>
            <p className={inter.className}>see more</p>
          </Link>
        </Card>
        <Card>
          <Link href="/about">
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>see more</p>
          </Link>
        </Card>
        <Card>
          <Link href="/contact">
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>see more</p>
          </Link>
        </Card>
      </div>
    </>
  );
}