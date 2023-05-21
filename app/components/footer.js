import Link from "next/link";
import footerStyles from "./footer.module.css";
import Player from "./player";
const Footer = () => (
  <>
    <div className={footerStyles.container}>
      <span className={footerStyles.playerContent}>
        {" "}
        <Player />{" "}
      </span>
      <span className={footerStyles.footerContent}>
        © 2023 Jen Corbett.
        <Link
          className={footerStyles.footerLink}
          target="_blank"
          href="https://github.com/ajenstory/jencorbett.dev"
          title="view this project on github"
        >
          View this project on github
        </Link>
      </span>
    </div>
  </>
);

export default Footer;
