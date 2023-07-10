import layoutStyles from "@layout/layout.module.css";
import { Inter } from "next/font/google";
import Link from "next/link.js";
import Main from "./main.js";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, page, home }) => (
  <div className={`${layoutStyles.container}  ${inter.className} `}>
    <div>
      <div className={layoutStyles.nav}>
        {home && <Header home />}
        {page && <Header page />}
      </div>
      <div>
        {home ? (
          <div>
            <Main
              home
              children={children}
            />
          </div>
        ) : (
          page && (
            <div>
              <Main
                page
                children={children}
              />
            </div>
          )
        )}
      </div>
    </div>
    <div className={layoutStyles.footer}>
      <nav className={layoutStyles.footerNav}>
        {home && <Link href="/posts">Go to blog</Link>}
        {page && <Link href="/">← Back to home</Link>}
      </nav>
    </div>
  </div>
);

import footerStyles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.footerContainer}>
      <p className={footerStyles.footerItem}> © 2023 Jen Corbett</p>
    </div>
  );
};

export default Layout;
