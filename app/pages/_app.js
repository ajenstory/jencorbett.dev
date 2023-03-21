import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";


const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >

      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>

      <option value='system'>System</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>

    </select>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <ThemeSwitch />

        <MDXProvider>
          <Layout main>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>

        <Component {...pageProps} />{" "}
      </ThemeProvider>{" "}

    </>
  );
};

export default App;
