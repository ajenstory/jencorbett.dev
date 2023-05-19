import { SiLinkedin, SiMastodon, SiRss } from "react-icons/si";
import { FiTwitter, FiGithub } from "react-icons/fi";
import IconWrapper from "./icon.js";
import navStyles from "./navbar.module.css";

const NavBar = () => (
  <div className={` ${navStyles.navContainer}`}>
    <ul className={` ${navStyles.grid}`}>
      <li className={` ${navStyles.item}`}>
        <IconWrapper
          alt="Linkedin icon"
          href="https://linkedin.com/in/jencorbett"
        >
          <SiLinkedin size={22} />
        </IconWrapper>
      </li>
      <li className={` ${navStyles.item}`}>
        <IconWrapper
          title="GitHub profile"
          alt="GitHub icon"
          href="https://github.com/ajenstory"
        >
          <FiGithub size={22} />
        </IconWrapper>
      </li>
      <li className={` ${navStyles.item}`}>
        <IconWrapper
          title="Mastodon profile"
          alt="Mastodon icon"
          href="https://mastodon.nz/@jen"
        >
          <SiMastodon size={22} />
        </IconWrapper>
      </li>
      <li className={` ${navStyles.item}`}>
        <IconWrapper
          title="Twitter profile"
          alt="Twitter icon"
          href="https://twitter.com/@ajenstory"
        >
          <FiTwitter size={22} />
        </IconWrapper>{" "}
      </li>
      {/* <li>
          {" "}
          <IconWrapper direct title="Blog posts" alt="Rss icon" href="/posts">
            <SiRss size={22} />
          </IconWrapper>
        </li> */}
    </ul>
  </div>
);

export default NavBar;
