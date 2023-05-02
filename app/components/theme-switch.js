import themeStyles from "components/theme.module.css";
import { FaMoon } from "react-icons/fa";
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
            <FaMoon />
          </button>
        </>
      ) : (
        <>
          <button
            className={`${themeStyles.change} ${themeStyles.darkMode} ${themeStyles.lightShadow}`}
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

export default ThemeSwitch;
