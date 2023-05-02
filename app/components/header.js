import Link from "next/link";
import headerStyles from "@components/header.module.css";
import Image from "next/image";

const profilePic = "/profile.jpg";

const MainLayout = ({ home }) => {
  const name = "Jen Corbett";
  return (
    <div className={`${headerStyles.header} `}>
      <header>
        {home ? (
          <>
            <div>
              <Image
                priority
                src={profilePic}
                className={`${headerStyles.borderCircle}  `}
                height={108}
                width={108}
                alt="Profile picture of Jen deep in thought"
              />
            </div>
            <div>
              <h1 className={headerStyles.headingXl}>{name}</h1>
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
            <h2 className={headerStyles.headingLg}>
              <Link
                href="/"
                className={headerStyles.colorInherit}
              ></Link>
            </h2>
          </>
        )}
      </header>
    </div>
  );
};

export default MainLayout;
