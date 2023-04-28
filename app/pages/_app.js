import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

import Layout from "../components/layout";
import { Provider } from "react-wrap-balancer";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      enableSystem={false}
      forcedTheme={Component.theme || null}
      disableTransitionOnChange
    >
      <Provider>
        <Layout main>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
