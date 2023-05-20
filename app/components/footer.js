import Link from "next/link";
import footerStyles from "./footer.module.css";

const Footer = () => (
  <>
    <div className={footerStyles.container}>
      <div className={footerStyles.footerContent}>
        <p>© 2023 Jen Corbett. </p>
        <p>
          <Link
            className={footerStyles.footerLink}
            target="_blank"
            href="https://github.com/ajenstory/jencorbett.dev"
            title="view this project on github"
          >
            View this project on github
          </Link>
        </p>
      </div>
    </div>
  </>
);

export default Footer;
