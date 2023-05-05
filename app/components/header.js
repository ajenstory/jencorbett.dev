import Link from "next/link";
import headerStyles from "@components/header.module.css";
import Image from "next/image";

const profilePic = "/profile.jpg";

const MainLayout = ({ home }) => {
  const name = "Jen Corbett";
  return (
    <div className={`${headerStyles.container} `}>
      <header>
        {home ? (
          <>
            <div className={` ${headerStyles.header} `}>
              <div className={`${headerStyles.borderCircle}  `}>
                <Link href="https://github.com/ajenstory/jencorbett.dev">
                  <Image
                    priority
                    src={profilePic}
                    height={108}
                    width={108}
                    alt="Profile picture of Jen deep in thought"
                  />{" "}
                </Link>
              </div>
              <div className={headerStyles.title}>
                <h1>{name}</h1>
              </div>
            </div>{" "}
          </>
        ) : (
          <>
            <Image
              src={profilePic}
              className={headerStyles.borderCircle}
              height={108}
              width={108}
              alt="Profile picture of Jen deep in thought"
            />
            <h1 className={headerStyles.headingLg}>
              <Link
                href="/"
                className={headerStyles.colorInherit}
              ></Link>
            </h1>
          </>
        )}
      </header>
    </div>
  );
};

export default MainLayout;
