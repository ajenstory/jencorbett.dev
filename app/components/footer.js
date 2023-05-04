import Link from "next/link";
import footerStyles from "./footer.module.css";

const Footer = () => (
  <>
    {" "}
    <div className={` ${footerStyles.container}`}>
      <footer>
        <div className={`${footerStyles.grid}`}>
          <div>© 2023 Jen Corbett</div>
          <div className={footerStyles.footerlink}>
            <Link
              aria-label="see this project on github"
              href="https://github.com/ajenstory/jencorbett.dev"
            >
              See this project on github
            </Link>
          </div>
        </div>
      </footer>
    </div>
  </>
);

export default Footer;
