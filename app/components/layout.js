import styles from "../styles/Home.module.css";
import Link from "next/link";
const error = "an error has occurred";
const Layout = ({ children, main }) => {
  return (
    <div>
      <div>
        {main ? (
          <main className={styles.main}>{children}</main>
        ) : (
          <main className={styles.page}>{error}</main>
        )}
      </div>{" "}
      <Link className={styles.center} href="/">
        ← Back to home{" "}
      </Link>
    </div>
  );
};

export default Layout;
