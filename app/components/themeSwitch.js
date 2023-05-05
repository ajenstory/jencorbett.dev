import themeStyles from "components/theme.module.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div id="darkMode">
      {theme === "light" ? (
        <>
          <button
            id="darkModeOff"
            name="dark mode off"
            aria-label="button to switch to dark mode"
            className={`${themeStyles.change} ${themeStyles.darkMode} ${themeStyles.darkShadow}`}
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            <span>
              <FaMoon id="on" title="switch dark mode on"></FaMoon> <p> off </p>{" "}
            </span>
          </button>
        </>
      ) : (
        <>
          <button
            id="lightModeOn"
            name="light mode on"
            aria-label="button to switch to light mode"
            className={`${themeStyles.change} ${themeStyles.darkMode} ${themeStyles.lightShadow}`}
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            <span>
              <FaRegMoon id="off" title="switch dark mode on">
                {" "}
              </FaRegMoon>{" "}
              <p> on </p>{" "}
            </span>{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default ThemeSwitch;
