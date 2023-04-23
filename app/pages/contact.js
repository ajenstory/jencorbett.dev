import Header from "../components/header";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const ContactPage = () => {
  return (
    <>
      <Header />{" "}
      <div className="style">
        <section className="section">
          <h1>Contact me</h1>
          <ul className={`${utilStyles.list}`}>
            <li>
              <p>hello@jencorbett.dev</p>
            </li>
            <li>
              <p>mastodon.nz/@jen</p>
            </li>
          </ul>
        </section>
      </div>
      <Link
        className={utilStyles.center}
        href="/"
      >
        ← Back to home{" "}
      </Link>
    </>
  );
};

export default ContactPage;
