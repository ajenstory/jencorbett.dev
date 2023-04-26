import Link from "next/link";
import { Inter } from "next/font/google";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Card from "../components/card";
import Header from "../components/header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header splash />
      <div className={styles}>
        <h1 className={`${utilStyles.headingXL}`}>Hello</h1>
        <div>
          <div className={styles.description.p}>
            {" "}
            <p className={inter.className}>
              Hi! I'm Jen. I'm an aspiring software developer with a background
              in digital and social media. Thanks for stopping by!
            </p>
            <p className={inter.className}>
              I'm currently working on this portfolio site, so there's not much
              to see here yet.
            </p>{" "}
            <p className={inter.className}>
              In the meantime, please get in touch with me on Linkedin or by
              emailing `hello [at] jencorbett.dev`.
            </p>{" "}
          </div>
        </div>{" "}
      </div>
      <Card>
        <Link href="https://linkedin.com/in/jencorbett">
          <h2 className={``}>
            Linkedin <span>-&gt;</span>
          </h2>
        </Link>
      </Card>
      <Card>
        <Link href="mailto:hello@jencorbett.dev">
          <h2 className={``}>
            Email <span>-&gt;</span>
          </h2>
        </Link>
      </Card>
      <div className={`${styles.hide}`}>
        <Card>
          <Link href="/projects">
            <h2 className={`${styles.hide}`}>
              Projects<span>-&gt;</span>
            </h2>
            <p className={inter.className}>see more</p>
          </Link>
        </Card>
        <Card>
          <Link href="/posts">
            <h2 className={`${styles.hide}`}>
              Posts <span>-&gt;</span>
            </h2>
            <p className={`${styles.hide}`}>see more</p>
          </Link>
        </Card>
        <Card>
          <Link href="/about">
            <h2 className={`${styles.hide}`}>
              About <span>-&gt;</span>
            </h2>
            <p className={`${styles.hide}`}>see more</p>
          </Link>
        </Card>
        <Card>
          <Link href="/contact">
            <h2 className={`${styles.hide}`}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={`${styles.hide}`}>see more</p>
          </Link>
        </Card>
      </div>
    </>
  );
}
