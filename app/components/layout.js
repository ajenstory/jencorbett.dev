import styles from "../styles/home.module.css";
import utilStyles from "../styles/utils.module.css";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, visible }) => {
  return (
    <div>
      <div>
        {`${children} && ${visible}` ? (
          <>
            <div>
              <main
                className={`${inter.className} ${utilStyles} ${styles} ${styles.main}`}
              >
                {children}
              </main>
            </div>
          </>
        ) : (
          <>
            <main className={` ${utilStyles.invisible}`}>{children}</main>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
