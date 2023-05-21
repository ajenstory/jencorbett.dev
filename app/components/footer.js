import Link from "next/link";
import footerStyles from "./footer.module.css";
import Player from "./player";
const Footer = () => (
  <>
    <div className={footerStyles.container}>
      <Player className={footerStyles.player} />
      <span className={footerStyles.footerLink}>
        <p>
          © 2023 Jen Corbett.{" "}
          <Link
            target="_blank"
            href="https://github.com/ajenstory/jencorbett.dev"
            title="view this project on github"
          >
            View this project on github
          </Link>
        </p>
      </span>
    </div>
  </>
);

export default Footer;
