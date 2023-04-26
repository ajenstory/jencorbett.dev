import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-wrap-balancer";
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
    </select>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Provider>
        <Layout main>
          <Component {...pageProps} /> <ThemeSwitch />{" "}
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
