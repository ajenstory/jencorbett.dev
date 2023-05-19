import layoutStyles from "@components/layout.module.css";
import { Inter } from "next/font/google";
import Meta from "@components/meta";
import ThemeSwitch from "./themeSwitch.js";
import Footer from "./footer.js";
import NavBar from "./navbar.js";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => (
  <div className={`${inter.className}`}>
    {`${children}` ? (
      <>
        <div className={layoutStyles.mainContainer}>
          <Meta /> <ThemeSwitch />
          <div>
            <NavBar />
          </div>
          <div className={layoutStyles.mainContent}>
            <main page>{children}</main>
          </div>
          <Footer />
        </div>
      </>
    ) : (
      <> </>
    )}
  </div>
);
export default Layout;
