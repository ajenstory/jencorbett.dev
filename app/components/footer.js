import footerStyles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div
        className={`${footerStyles.container} ${footerStyles.footer} ${footerStyles.border} ${footerStyles.center}`}
      >
        <p>
          {" "}
          © 2023 Jen Corbett &#183;{" "}
          <Link
            className={footerStyles.footerlink}
            href="https://github.com/ajenstory/jencorbett.dev"
          >
            see this on github
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
