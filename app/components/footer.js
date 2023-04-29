import { SiMastodon, SiLinkedin } from "react-icons/si";
import { FiGithub, FiTwitter } from "react-icons/fi";
import IconWrapper from "./icon";

import styles from "@styles/Home.module.css";

const Footer = () => {
  return (
    <div className={`${styles.div}  ${styles.grid} `}>
      <IconWrapper
        alt="Linkedin icon"
        href="https://linkedin.com/in/jencorbett"
      >
        <SiLinkedin size={22} />
      </IconWrapper>
      <IconWrapper alt="GitHub icon" href="https://github.com/ajenstory">
        <FiGithub size={22} />
      </IconWrapper>
      <IconWrapper alt="Mastodon icon" href="https://mastodon.nz/@jen">
        <SiMastodon size={22} />
      </IconWrapper>
      <IconWrapper alt="Twitter icon" href="https://twitter.com/@ajenstory">
        <FiTwitter size={22} />
      </IconWrapper>
    </div>
  );
};

export default Footer;
