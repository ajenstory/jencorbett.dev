import headerStyles from "./header.module.css";
import Head from "next/head";

const Header = ({ home, page }) => {
  return (
    <div>
      <Head>
        <meta content="" />
      </Head>
      <header className={headerStyles.header}>
        {home ? (
          <>
            <div className={`${headerStyles.headerWrapper}`}></div>{" "}
            <h1 className={headerStyles.heading2Xl}>Hey, it's Jen</h1>
          </>
        ) : (
          page && (
            <div>
              <h2 className={headerStyles.headingLg}>Hey, it's Jen</h2>
            </div>
          )
        )}
      </header>
    </div>
  );
};

export default Header;
