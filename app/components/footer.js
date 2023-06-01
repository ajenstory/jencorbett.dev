import Link from "next/link";
import footerStyles from "./footer.module.css";

const Footer = () => (
  <div>
    <footer className={footerStyles.container}>
      <div className={footerStyles.wrapper}>
        <p className={footerStyles.item}>
          <Link
            target="_blank"
            href="https://github.com/ajenstory/jencorbett.dev"
            title="view this project on github"
          >
            View this project on github
          </Link>
        </p>
        <p> © 2023 Jen Corbett</p>
      </div>
    </footer>
  </div>
);

export default Footer;
