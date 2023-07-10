import layoutStyles from "@layout/layout.module.css";
import { Inter } from "next/font/google";
import Link from "next/link.js";
import Main from "./main.js";
import Header from "./header";
import footerStyles from "./footer.module.css";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image.js";
const Layout = ({ children, page, home }) => (
  <div
    className={`${layoutStyles.container} ${layoutStyles.center} ${inter.className} `}
  >
    <div>
      <div className={layoutStyles.header}>
    
        {home && <Header home />}
        {page && <Header page />}
      </div>
      <div className={layoutStyles.main}>
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
        <div className={layoutStyles.link}>
          {page && <Link href="/">← Back to home</Link>}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <Footer />
  </div>
);

const Footer = () => {
  return (
    <div className={footerStyles.footerContainer}>
      <p className={footerStyles.footerItem}> © 2023 Jen Corbett</p>
    </div>
  );
};

export default Layout;
