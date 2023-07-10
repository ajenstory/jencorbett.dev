import headerStyles from "./header.module.css";
import Head from "next/head";
import Image from "next/image";
const Header = ({ home, page }) => {
  return (
    <div>
      <Head>
        <meta content="" />
      </Head>
      <header className={headerStyles.header}>
        {home ? (
          <>
            <h1 className={headerStyles.heading2Xl}>Hey, it's Jen :)</h1>
          </>
        ) : (
          page && (
            <>
              <Image
                src="/../public/profile.jpg"
                className={headerStyles.borderCircle}
                height={124}
                width={124}
                alt=""
              />{" "}
              <h1 className={headerStyles.headingLg}>Hey, it's Jen</h1>
            </>
          )
        )}
      </header>
    </div>
  );
};

export default Header;
