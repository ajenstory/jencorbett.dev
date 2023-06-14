import footerStyles from "./footer.module.css";
import Player from "./player.js";
const Footer = () => (
  <footer className={footerStyles.footerContainer}>
    {" "}
    <div className={footerStyles.footerPlayer}>
      <Player />
    </div>
    <div className={footerStyles.footerItem}>
      <p> © 2023 Jen Corbett</p>
    </div>
  </footer>
);

export default Footer;
