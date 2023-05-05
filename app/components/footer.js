import Link from "next/link";
import footerStyles from "./footer.module.css";

const Footer = () => (
  <>
    {" "}
    <div className={` ${footerStyles.container}`}>
      <footer>
        <div className={`${footerStyles.grid}`}>
          <div className={`${footerStyles.wrapper}`}>
            <p>
              {" "}
              © 2023 Jen Corbett &#183;{" "}
              <span className={footerStyles.footerlink}>
                {" "}
                <Link
                  target="_blank"
                  aria-label="see this project on github"
                  href="https://github.com/ajenstory/jencorbett.dev"
                >
                  See this project on github
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </>
);

export default Footer;
