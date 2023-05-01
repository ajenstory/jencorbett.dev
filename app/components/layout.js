import utilStyles from "../styles/utils.module.css";

import styles from "../styles/Home.module.css";

import { Inter } from "next/font/google";
import { FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "light" ? (
        <>
          <button
            className={`${utilStyles.change} ${utilStyles.darkMode} ${utilStyles.darkShadow}`}
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            <FaMoon />
          </button>
        </>
      ) : (
        <>
          <button
            className={`${utilStyles.change} ${utilStyles.darkMode} ${utilStyles.lightShadow}`}
            onClick={() =>
              theme === "dark"
                ? setTheme("light") && setLight()
                : setTheme("dark")
            }
          >
            <FaMoon />
          </button>
        </>
      )}
    </div>
  );
};

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
