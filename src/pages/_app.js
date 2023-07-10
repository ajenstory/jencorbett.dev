import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-wrap-balancer";

const App = ({ Component, pageProps }) => (
  <ThemeProvider
    enableSystem={false}
    forcedTheme={Component.theme || null}
    disableTransitionOnChange
  >
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </ThemeProvider>
);

export default App;
