import Link from "next/link";
import footerStyles from "./footer.module.css";

const Footer = () => (
  <>
    {" "}
    <div className={`${footerStyles.container}  ${footerStyles.border}`}>
      <footer>
        © 2023 Jen Corbett &#183;
        <Link
          target="_blank"
          href="https://github.com/ajenstory/jencorbett.dev"
          title="view this project on github"
        >
          view this project on github
        </Link>
      </footer>
    </div>
  </>
);

export default Footer;
