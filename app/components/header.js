import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

const profilePic = "/profile.jpg";

const MainLayout = ({ home }) => {
  const name = "Jen Corbett";
  return (
    <div>
      <header className={`${utilStyles.header}`}>
        {home ? (
          <>
            <Image
              priority
              src={profilePic}
              className={`${utilStyles.borderCircle} ${utilStyles.change}`}
              height={108}
              width={108}
              alt="Profile picture of Jen deep in thought"
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
              alt="Profile picture of Jen deep in thought"
            />
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}></Link>
            </h2>
          </>
        )}
      </header>
    </div>
  );
};

export default MainLayout;
