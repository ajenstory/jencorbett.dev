import ThemeSwitch from "./themeSwitch";
import layoutStyles from "@components/layout.module.css";
import { Inter } from "next/font/google";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";
import Meta from "@components/meta";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <div className={`${inter.className}`}>
      {" "}
      {`${children}` ? (
        <>
          {" "}
          <div className={` ${layoutStyles.grid}`}>
            <Meta />
            <div>
              <ThemeSwitch /> <NavBar />
              <Header home />
            </div>
            <div className={`${layoutStyles.main} `}>
              <main>
                <div>{children}</div>
              </main>{" "}
            </div>{" "}
            <Footer />
          </div>
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
              <main>
                <div>{children}</div>
              </main>{" "}
            </div>{" "}
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
