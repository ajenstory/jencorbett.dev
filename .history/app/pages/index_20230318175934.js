import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>crashTestDolly</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
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
              link
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href=''
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>placeholder</p>
          </a>

          <a
            href=''
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>heading 2</h2>
            <p className={inter.className}>placeholder</p>
          </a>

          <a
            href=''
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>H2 heading</h2>
            <p className={inter.className}>placeholder</p>
          </a>

          <a
            href=''
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>placeholder</p>
          </a>
        </div>
      </main>
    </>
  );
}
