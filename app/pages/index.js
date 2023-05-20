import indexStyles from "@styles/index.module.css";
import Header from "@components/header.js";

const description = {
  title: "Jen Corbett",
  intro:
    "Hey, I'm Jen. I'm a developer and strategist based in Ruakākā, Aotearoa, New Zealand",
  about:
    "I've recently graduated with a diploma in Web Development and Design, and I'm passionate about designing and building better experiences for people through technology.",
  info: "I'm currently working on a few personal projects, building my personal porfolio, and a few other things which I'll be sharing here soon!",
  cta: "To say hi or check my availability, feel free to email me at hello[at]jencorbett.dev",
};

const Home = () => {
  return (
    <div className={indexStyles.sectionContainer}>
      {/* <div className={`${indexStyles.body} ${indexStyles.indexContent}`}> */}
      <ul className={indexStyles.contentGrid}>
        <li className={indexStyles.headerImg}>
          <Header home />
        </li>
        <li>
          <h1 className={indexStyles.title}>{description.title}</h1>
          <span className={`${indexStyles.intro} ${indexStyles.item}`}>
            <p>{description.intro}</p>
            <p>{description.about}</p>
          </span>
          <span className={`${indexStyles.item} ${indexStyles.info}`}>
            <p>{description.info}</p>
            <p>{description.details}</p>
            <p>{description.cta}</p>
          </span>
        </li>
      </ul>
    </div>
    // </div>
  );
};

export default Home;
