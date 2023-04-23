import Link from "next/link";
import { Inter } from "@next/font/google";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/home.module.css";
import Card from "../components/card";
import Header from "../components/header";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Header splash />
      <div className={styles}>
        <h1 className={`${inter.className} ${utilStyles.headingXL}`}>Hello</h1>
        <div>
          <div className={styles.description.p}>
            {" "}
            <p className={inter.className}>
              I'm a developer with a digital marketing background.
            </p>
          </div>
        </div>{" "}
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
              Posts <span>-&gt;</span>
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
