import ThemeSwitch from "./theme-switch";
import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <div className={`${inter.className}`}>
      {" "}
      {`${children}` ? (
        <>
          {" "}
          <NavBar /> <ThemeSwitch />
          <div className={`${styles.main}`}>
            <Header main />
          </div>
          <div className={`${styles.main}`}>
            {" "}
            <main>{children}</main>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <NavBar /> <ThemeSwitch />
          {/* <---- change this to page when new layout is created --->  */}
          <div className={`${styles.main}`}>
            <Header page />
          </div>
          <main className={`${styles.main}`}>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
