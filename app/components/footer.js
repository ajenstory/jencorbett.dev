import footerStyles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={`${footerStyles.container}  ${footerStyles.border}`}>
      <footer>
        <p>
          {" "}
          © Jen Corbett 2023 &#183;{" "}
          <Link
            className={footerStyles.footerlink}
            href="https://github.com/ajenstory/jencorbett.dev"
          >
            visit this project on github
          </Link>
        </p>
      </footer>{" "}
    </div>
  );
};

export default Footer;
