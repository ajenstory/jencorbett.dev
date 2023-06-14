import layoutStyles from "@components/layout.module.css";
import { Inter } from "next/font/google";
import Meta from "@components/meta";
import Footer from "./footer.js";
import NavBar from "./navbar.js";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => (
  <div className={layoutStyles.container}>
    <ul className={`${inter.className}  ${layoutStyles.grid}`}>
      <li className={layoutStyles.nav}>
        <NavBar />
      </li>
      <li>
        <main className={`${layoutStyles.main} ${layoutStyles.center}`}>
          <Meta />
          {children}
        </main>
      </li>
      <li className={layoutStyles.footer}>
        <Footer />

      </li>
    </ul>
  </div>
);
export default Layout;
