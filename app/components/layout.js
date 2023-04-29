import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { Inter } from "next/font/google";

import { FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Footer from "./footer";

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
      <div>
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
        </div>{" "}
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      {" "}
      {`${children}` ? (
        <>
          <div>
            <main className={`${inter.className}`}>
              {" "}
              <div className={` ${utilStyles.center} `}>
                <ThemeSwitch />
              </div>
              {children}
              <Footer />
            </main>{" "}
          </div>
        </>
      ) : (
        <>
          <main className={``}>
            {children}
            <div>
              {" "}
              <ThemeSwitch />
            </div>{" "}
          </main>
        </>
      )}
    </div>
  );
};

export default Layout;
