import layoutStyles from "@components/layout.module.css";
import { Inter } from "next/font/google";
import Meta from "@components/meta";
import ThemeSwitch from "./themeSwitch.js";
// import Footer from "./footer.js";
import Header from "./header.js";
import NavBar from "./navbar.js";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => (
  <div className={`${inter.className} ${layoutStyles.grid}`}>
    {" "}
    {`${children}` ? (
      <>
        <div>
          <Meta />
          <ThemeSwitch /> <NavBar />
          <Header home />
        </div>
        <div>
          <main
            home
            className={`${layoutStyles.main} `}
          >
            <div>{children}</div>
          </main>{" "}
        </div>{" "}
        {/* <Footer /> */}
      </>
    ) : (
      <>
        <div className={` ${layoutStyles.grid}`}>
          <Meta />
          <div>
            <ThemeSwitch /> <NavBar />
            <Header />
          </div>
          <div className={`${layoutStyles.main} `}>
            <main page>
              <div>{children}</div>
            </main>{" "}
          </div>{" "}
        </div>
      </>
    )}
  </div>
);

export default Layout;
