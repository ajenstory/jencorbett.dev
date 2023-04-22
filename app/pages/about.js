import utilStyles from "../styles/utils.module.css";

import Header from "../components/header";
import Link from "next/link";
const AboutPage = () => {
  return (
    <>
      <Header />
      <h1>About me</h1>
      <p>
        <code>{`"name": "crashTestDolly"`}</code>
      </p>
      <Link className={utilStyles.center} href="/">
        ← Back to home{" "}
      </Link>
    </>
  );
};

export default AboutPage;
