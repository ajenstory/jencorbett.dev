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
            <Link href="https://github.com/ajenstory/jencorbett.dev">
              see this project on github
            </Link>
          </div>
        </div>
      </footer>
    </div>
  </>
);

export default Footer;
