import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
// import styles from "./header.module.css";
import Image from "next/image";
// import Layout from "./layout";
const MainLayout = ({ home }) => {
  const name = "Portfolio";
  return (
    <div>
      <header >
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
            <Link href="/">
              <Image
                priority
                src="/../public/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
    </div>
  );
};

export default MainLayout;
