import layoutStyles from "@components/layout.module.css";
import { Inter } from "next/font/google";

import Meta from "@components/meta";
import Footer from "./footer.js";
import NavBar from "./navbar.js";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => (
  <div className={`${layoutStyles.container}  ${inter.className} `}>
    <div className={layoutStyles.nav}>
      <NavBar />
    </div>
    <ul className={`${layoutStyles.list} ${layoutStyles.grid}`}>
      <li>
        <main className={`${layoutStyles.main}`}>
          <Meta />
          {children}
        </main>
      </li>
    </ul>{" "}
    <div className={layoutStyles.footer}>
      <Footer />
    </div>
  </div>
);
export default Layout;
