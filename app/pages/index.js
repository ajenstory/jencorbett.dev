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
          <p className={` ${styles}`}>
            Hello, I'm Jen! Early adopter, "late" developer and veteran of the
            social media era.
          </p>{" "}
          <p>
            I'm currently working on this site. So there's not much to see here
            yet. In time, I'll have be growing a little digital garden, as a
            sort of digital garden and porfolio, with some writing to share and
            project stuff to show off too.
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
      <Card>
        <Link href="https://mastodon.nz/@jen">
          <h2 className={``}>
            Mastodon <span>-&gt;</span>
          </h2>
        </Link>
      </Card>
      <Card>
        <Link href="https://twitter.com/@ajenstory">
          <h2 className={``}>
            Twitter <span>-&gt;</span>
          </h2>
        </Link>
      </Card>
    </>
  );
}
