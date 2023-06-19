// import Link from "next/link";
import headerStyles from "@components/header.module.css";
// import Image from "next/image";
import Head from "next/head";

// const name = "Jen Corbett";

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
            <h1 className={headerStyles.heading2Xl}></h1>
          </>
        ) : (
          page && (
            <div>
              <h1 className={headerStyles.heading2Xl}></h1>
            </div>
          )
        )}
      </header>
    </div>
  );
};

export default Header;
