import Header from "../components/header";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const ContactPage = () => {
  return (
    <>
      <Header />
      <h1>Contact me</h1>
      {/* <code>{ `"email": "crashTestDollynz@gmail.com"`}</code>
      <code>{`"name": "crashTestDolly"`}</code>
      <code>{`"name": "crashTestDolly"`}</code> */}
      <Link className={utilStyles.center} href="/">
        ← Back to home{" "}
      </Link>
    </>
  );
};

export default ContactPage;
