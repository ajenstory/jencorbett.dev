import { SiLinkedin, SiMastodon, SiRss } from "react-icons/si";
import { FiTwitter, FiGithub } from "react-icons/fi";
import Link from "next/link";
import navStyles from "./navbar.module.css";
import ThemeSwitch from "./themeSwitch.js";

const size = 24;

const NavBar = () => (
  <div className={navStyles.navContainer}>
    <ul className={navStyles.grid}>
      <NavItem
        icon={<SiLinkedin />}
        alt="Linkedin icon"
        href="https://linkedin.com/in/jencorbett"
        size={size}
      />
      <NavItem
        icon={<FiGithub />}
        alt="GitHub icon"
        href="https://github.com/ajenstory"
        title="GitHub profile"
        size={size}
      />
      <NavItem
        icon={<SiMastodon />}
        alt="Mastodon icon"
        href="https://mastodon.nz/@jen"
        title="Mastodon profile"
        size={size}
      />
      <NavItem
        icon={<FiTwitter />}
        alt="Twitter icon"
        href="https://twitter.com/@ajenstory"
        title="Twitter profile"
        size={size}
      />
      {/* <NavItem
          icon={<SiRss />}
          alt="Rss icon"
          href="/posts"
          title="Blog posts"
          size={22}
        /> */}
    </ul>
    <ThemeSwitch />
  </div>
);

const NavItem = ({ icon, alt, href, title, size }) => (
  <li className={navStyles.item}>
    <IconWrapper href={href} title={title} size={size}>
      {icon}
    </IconWrapper>
  </li>
);

const IconWrapper = ({ children, href, title, size }) => (
  <div>
    <Link target="_blank" title={title} href={href}>
      <span>
        <Icon size={size}>{children}</Icon>
      </span>
    </Link>
  </div>
);

const Icon = ({ children, size }) => (
  <div size={size} style={{ fontSize: size }}>
    {children}
  </div>
);

export default NavBar;
