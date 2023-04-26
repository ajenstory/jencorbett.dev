import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Logo from "../components/logo";
import Image from "next/image";
import agile from "../public/assets/agile.svg";
import next from "../public/assets/next.svg";
import nodejs from "../public/assets/nodejs.png";
import dockercompose from "../public/assets/docker-compose.png";
import css3 from "../public/assets/css3.svg";
import html5 from "../public/assets/html5.svg";
import es6 from "../public/assets/es6.svg";
import js from "../public/assets/js.svg";
import react from "../public/assets/react.svg";
import Header from "../components/header";
import Link from "next/link";
const AboutPage = () => {
  return (
    <>
      <Header /> <h1>About me</h1>
      <section className={``}>
        <div className={`${styles.grid}`}>
          {" "}
          <Logo>
            <Image
              width="60"
              height="60"
              src={js}
            ></Image>
          </Logo>
          <Logo>
            <Image
              width="120"
              height="60"
              src={nodejs}
            ></Image>
          </Logo>{" "}
          <Logo>
            <Image
              width="60"
              height="60"
              src={es6}
            ></Image>
          </Logo>
          <Logo>
            <Image
              width="60"
              height="60"
              src={html5}
            ></Image>

            <Image
              width="60"
              height="60"
              src={css3}
            ></Image>
          </Logo>
          <Logo>
            <Image
              width="60"
              height="60"
              src={dockercompose}
            ></Image>
          </Logo>{" "}
          <Logo>
            <Image
              width="60"
              height="60"
              src={react}
            ></Image>
            <Image
              width="60"
              height="60"
              src={next}
            ></Image>
            <Image
              width="60"
              height="60"
              src={agile}
            ></Image>
          </Logo>
          <p
            className={`${utilStyles.expressjs}`}
            href={""}
          >
            express
          </p>
        </div>
      </section>{" "}
      <h1>Bio</h1>
      <section className={``}>
        <div></div>
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
