import Link from "next/link";
import headerStyles from "@components/header.module.css";
import Image from "next/image";
import Head from "next/head";
const profilePic = "/profile.jpg";
const name = "Jen Corbett";

const MainLayout = ({ home }) => {
  return (
    <div>
      <Head>
        <meta content="" />
      </Head>

      <header className={headerStyles.header}>
        {home ? (
          <>
            <div className={`${headerStyles.headerWrapper}`}>
              <Link href="https://github.com/ajenstory/jencorbett.dev">
                <Image
                  className={`${headerStyles.borderCircle}`}
                  priority
                  src={profilePic}
                  height={108}
                  width={108}
                  alt="Profile picture of Jen deep in thought"
                />{" "}
              </Link>{" "}
            </div>{" "}
            <h1 className={headerStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link
              href="/"
              className={headerStyles.colorInherit}
            >
              {" "}
              <Image
                src={profilePic}
                className={headerStyles.borderCircle}
                height={80}
                width={80}
                alt="Profile picture of Jen deep in thought"
              />
            </Link>
          </>
        )}
      </header>
    </div>
  );
};

export default MainLayout;
