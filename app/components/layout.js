import layoutStyles from "@components/layout.module.css";
import { Inter } from "next/font/google";
import Meta from "@components/meta";
import ThemeSwitch from "./themeSwitch.js";
import Footer from "./footer.js";
import Link from "next/link";
import Header from "./header.js";
import NavBar from "./navbar.js";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => (
  <div className={`${inter.className} ${layoutStyles.grid}`}>
    {" "}
    {`${children}` ? (
      <>
        <div className={`${inter.className} ${layoutStyles.grid}`}>
          <Meta />
          <ThemeSwitch /> <NavBar />
          <Header home />
        </div>
        <div>
          <main className={`${layoutStyles.main} `}>
            <div>{children}</div>
          </main>{" "}
        </div>
      </>
    ) : (
      <>
        {" "}
        <div className={`${inter.className} ${layoutStyles.grid}`}>
          <Meta />
          <ThemeSwitch /> <NavBar />
          <Header />
        </div>
        <div>
          <main className={`${layoutStyles.main} `}>
            <div>{children}</div>
          </main>{" "}
        </div>
      </>
    )}
  </div>
);

export default Layout;
