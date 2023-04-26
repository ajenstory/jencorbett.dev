import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./header.module.css";
import Image from "next/image";

const profilePic = "/profile.jpg";

const MainLayout = ({ home }) => {
  const name = "@aJenStory";
  return (
    <div>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={profilePic}
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt="Profile picture of me deep in thought"
            />
            <h1 className={utilStyles.headingXl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              src={profilePic}
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt="Profile picture of me deep in thought"
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
