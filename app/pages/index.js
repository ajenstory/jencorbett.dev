import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Crash Test Diaries</title>
        <meta
          name='description'
          content=''
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <see
          more
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>{`"name": "crashTestDolly"`}</code>
          </p>
          <div>
            <a
              href='https://github.com/crashtestdolly'
              target='_blank'
              rel='noopener noreferrer'
            >
              main logo or see more
            </a>
          </div>
        </div>
        <div className={styles.grid}>
          <p className={inter.className}>Hi. I'm Jen!</p>
          <p className={inter.className}>
          
          I'm currently working on my portfolio, and looking forward to sharing more of my ideas and projects with you here.
          </p>
        </div>{" "}
        <p className={inter.className}>Find out more</p>
        <div className={styles.grid}>
          <a
            href=''
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Projects<span>-&gt;</span>
            </h2>
            <p className={inter.className}>see more</p>
          </a>
          <a
            href=''
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Diaries <span>-&gt;</span>
            </h2>
            <p className={inter.className}>see more</p>
          </a>
          <a
            href=''
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>see more</p>
          </a>
          <a
            href=''
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>see more</p>
          </a>
        </div>
      </main>
    </>
  );
}
