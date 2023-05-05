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
    <div>
      {theme === "light" ? (
        <>
          <button
            className={`${themeStyles.change} ${themeStyles.darkMode} ${themeStyles.darkShadow}`}
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            <span>
              <FaMoon title="switch dark mode on"></FaMoon> <p> off </p>{" "}
            </span>
          </button>
        </>
      ) : (
        <>
          <button
            className={`${themeStyles.change} ${themeStyles.darkMode} ${themeStyles.lightShadow}`}
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            <span>
              <FaRegMoon title="switch dark mode on"> </FaRegMoon> <p> on </p>{" "}
            </span>{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default ThemeSwitch;
