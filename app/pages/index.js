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
      <Header home />
      <div className={` ${styles.center} ${styles.grid}`}>
        {" "}
        <Card>
          {" "}
          <h2 className={`${inter.className} `}>
            From Hashtags to HTTP...
          </h2>{" "}
          <p className={` ${styles}`}>Hello, I'm Jen!</p>{" "}
          <p>
            I'm currently working on this site. So there's not much to see here
            yet. In time, I'll have a lovely digital garden growing, with some
            writing to share and projects to show off too!
          </p>
          <p>
            In the meantime, please don't hesitate to reach out on Linkedin or
            by emailing me on{" "}
            <span className={` ${utilStyles.bold} `}>
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
    </>
  );
}
