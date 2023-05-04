import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-wrap-balancer";
import Layout from "../components/layout.js";

const App = ({ Component, pageProps }) => (
  <ThemeProvider
    enableSystem={false}
    forcedTheme={Component.theme || null}
    disableTransitionOnChange
  >
    <Provider>
      <Layout home>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </ThemeProvider>
);

export default App;
