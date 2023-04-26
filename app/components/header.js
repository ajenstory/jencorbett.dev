import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./header.module.css";
import Image from "next/image";

const MainLayout = ({ home }) => {
  const name = "@aJenStory";
  return (
    <div>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/../public/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              priority
              src="/../public/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt=""
            />
            <h2 className={utilStyles.headingLg}>
              <Link
                href="/"
                className={utilStyles.colorInherit}
              ></Link>
            </h2>
          </>
        )}
      </header>
    </div>
  );
};

export default MainLayout;
