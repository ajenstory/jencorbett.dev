import layoutStyles from "@components/layout.module.css";
import { Inter } from "next/font/google";
import Meta from "@components/meta";
import ThemeSwitch from "./themeSwitch.js";
import Header from "./header.js";
import NavBar from "./navbar.js";
// import Footer from "./footer.js";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => (
  <div className={`${inter.className}`}>
    {" "}
    {`${children}` ? (
      <>
        <div className={layoutStyles.header}>
          <Meta />
          <ThemeSwitch /> <NavBar />
          <Header home />
        </div>{" "}
        <div className={layoutStyles.layoutContainer}>
          <main
            page
            className={layoutStyles.mainContent}
          >
            {children}
          </main>{" "}
        </div>{" "}
      </>
    ) : (
      <>
        {" "}
        <div>
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
