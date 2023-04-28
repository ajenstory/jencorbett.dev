import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        <FaMoon />
      </button>
    </div>
  );
};

const Layout = ({ children, visible }) => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        {`${children} && ${visible}` ? (
          <>
            <div>
              <main
                className={`${inter.className} ${utilStyles} ${styles} ${styles.main}`}
              >
                {" "}
                <div className={` ${utilStyles.center} `}>
                  <ThemeSwitch />
                </div>
                {children}
              </main>
            </div>
          </>
        ) : (
          <>
            <main className={` ${utilStyles.invisible}`}>{children}</main>
          </>
        )}
      </div>{" "}
    </div>
  );
};

export default Layout;
