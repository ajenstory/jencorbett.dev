import utilStyles from "../styles/utils.module.css";
import styles from "../styles/home.module.css";
import Card from "../components/card";
import Image from "next/image";
import css3 from "../public/assets/css3.svg";
import Header from "../components/header";
import Link from "next/link";
const AboutPage = () => {
  return (
    <>
      <Header /> <h1>About me</h1>
      <section>
        <div className={`${styles.card}${styles.grid} ${styles.center}`}>
          {" "}
          <Card>
            <Image
              width="60"
              height="60"
              src={css3}
            ></Image>
          </Card>
          <Card>
            <Image
              width="60"
              height="60"
              src={css3}
            ></Image>
          </Card>
          <Card>
            <Image
              width="60"
              height="60"
              src={css3}
            ></Image>
          </Card>
        </div>
      </section>
      <Link
        className={utilStyles.center}
        href="/"
      >
        ← Back to home{" "}
      </Link>
    </>
  );
};

export default AboutPage;
