import IconWrapper from "./icon";
import navStyles from "./navbar.module.css";
import { SiLinkedin, SiMastodon } from "react-icons/si";
import { FiTwitter, FiGithub } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="">
      <div className="">
        <ol className={` ${navStyles.nav} ${navStyles.grid}`}>
          <li lassName={` ${navStyles.navitem} ${navStyles.change}`}>
            <IconWrapper
              alt="Linkedin icon"
              href="https://linkedin.com/in/jencorbett"
            >
              <SiLinkedin size={22} />
            </IconWrapper>
          </li>
          <li lassName={`  ${navStyles.change}`}>
            <IconWrapper
              alt="GitHub icon"
              href="https://github.com/ajenstory"
            >
              <FiGithub size={22} />
            </IconWrapper>
          </li>
          <li lassName={` ${navStyles.navitem} ${navStyles.change}`}>
            <IconWrapper
              alt="Mastodon icon"
              href="https://mastodon.nz/@jen"
            >
              <SiMastodon size={22} />
            </IconWrapper>
          </li>
          <li lassName={` ${navStyles.navitem} ${navStyles.change}`}>
            <IconWrapper
              alt="Twitter icon"
              href="https://twitter.com/@ajenstory"
            >
              <FiTwitter size={22} />
            </IconWrapper>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
