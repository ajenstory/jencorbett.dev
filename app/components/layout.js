import styles from "../styles/home.module.css";
import utilStyles from "../styles/utils.module.css";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, main }) => {
  return (
    <div>
      <main
        className={`${inter.className} ${utilStyles} ${styles} ${styles.main}`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
