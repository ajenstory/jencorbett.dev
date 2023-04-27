import Link from "next/link";
import HeadComponent from "@components/head";
import Card from "../components/card";
import Header from "../components/header";
import utilStyles from "@styles/utils.module.css";
import styles from "@styles/Home.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HeadComponent />
      <Header home />
      <div className={` ${styles.center} ${styles.grid}`}>
        <Card>
          <h2 className={`${inter.className} `}>Hello, I'm Jen!</h2>
          <p>
            {" "}
            I'm a developer and digital strategist based in Ruakākā, Aotearoa
            New Zealand.
          </p>
          <p>
            I'm currently working on this site. So there's not much to see here
            yet! Please bookmark for now and check back soon. In the meantime,
            feel free to reach out on LinkedIn or get in touch directly on{" "}
            <span className={`${utilStyles.bold} `}>
              hello[at]jencorbett.dev
            </span>
            .
          </p>
        </Card>{" "}
      </div>
      <div className={`${styles.div} ${styles.grid}`}>
        <Card>
          <Link href="https://linkedin.com/in/jencorbett">
            <h2 className={``}>
              Linkedin <span>-&gt;</span>
            </h2>
          </Link>
        </Card>

        <Card>
          <Link href="https://github.com/ajenstory">
            <h2 className={``}>
              Github <span>-&gt;</span>
            </h2>
          </Link>
        </Card>
        <Card>
          <Link href="https://mastodon.nz/@jen">
            <h2 className={``}>
              Mastodon <span>-&gt;</span>
            </h2>
          </Link>
        </Card>
        <Card>
          <Link href="https://twitter.com/@ajenstory">
            <h2 className={`${styles.card.h2}`}>
              Twitter <span>-&gt;</span>
            </h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
