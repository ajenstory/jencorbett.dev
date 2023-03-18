import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  <ThemeProvider>
    return <Component {...pageProps} />;
  </ThemeProvider>;
};

export default App;
