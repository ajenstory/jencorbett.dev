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
          <Header main /> <NavBar />
          <ThemeSwitch />
          <div className={`${styles.main}`}>
            {" "}
            <main className={``}>{children}</main>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <ThemeSwitch />
          <Header />
          <main className={`${styles.main}`}>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
