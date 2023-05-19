import Link from "next/link";
import headerStyles from "@components/header.module.css";
import Image from "next/image";

const profilePic = "/profile.jpg";

const MainLayout = ({ home }) => {
  const name = "Jen Corbett";
  return (
    <header>
      {home ? (
        <>
          <div className={`${headerStyles.borderCircle}  `}>
            <Link href="https://github.com/ajenstory/jencorbett.dev">
              <Image
                priority
                src={profilePic}
                height={108}
                width={108}
                alt="Profile picture of Jen deep in thought"
              />{" "}
            </Link>{" "}
          </div>
        </>
      ) : (
        <>
          <Link href="/" className={headerStyles.colorInherit}>
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
  );
};

export default MainLayout;
