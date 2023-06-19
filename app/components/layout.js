import layoutStyles from "@components/layout.module.css";
import { Inter } from "next/font/google";

import Link from "next/link.js";
import MainContent from "./mainContent.js";
// import Footer from "./footer.js";
import NavBar from "./navbar.js";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, page, home }) => (
  <div className={`${layoutStyles.container}  ${inter.className} `}>
    <div>
      <div className={layoutStyles.nav}>
        <NavBar home />
      </div>
      <div>
        {home ? (
          <div>
            <Header home />

            <MainContent
              home
              children={children}
            />
          </div>
        ) : (
          page && (
            <div>
              <Header page />
              <MainContent
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
        {/* {home && <Link href="/posts">Go to blog</Link>} */}
        {page && <Link href="/">← Back to home</Link>}
      </nav>
    </div>
  </div>
);

export default Layout;
