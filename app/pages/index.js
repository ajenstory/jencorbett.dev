import indexStyles from "@styles/index.module.css";
import Header from "@components/header.js";

const description = {
  title: "Hey, I'm Jen.",
  intro:
    "I'm passionate about designing and building better digital experiences for people through technology.",
  about:
    "I recently graduated from a web development and design programme, and my background spans 15 years digital marketing and communications.",
  info: "I have several projects on the go, including this web portfolio! It's currently in progress, so check back soon.",
  more: "I'm currently seeking a full-time, remote-first role in software development, and also open to freelance opportunities.",
  cta: "To say hi or check my availability, feel free to email me at hello[at]jencorbett.dev",
};

const Home = () => {
  return (
    <div className={indexStyles.sectionContainer}>
      {" "}
      <ul className={indexStyles.contentGrid}>
        <li className={indexStyles.headerImg}>
          <Header home />
        </li>
        <span className={indexStyles.intro}>
          {" "}
          <li className={`${indexStyles.item}`}>
            <h1 className={indexStyles.title}>{description.title}</h1>
            <p>{description.intro}</p>
          </li>{" "}
          <li className={`${indexStyles.item}`}>
            <p>{description.about}</p>
          </li>{" "}
          <li className={`${indexStyles.item}`}>
            <p>{description.info}</p>
          </li>
          <li className={`${indexStyles.item} ${indexStyles.info}`}>
            <p>{description.more}</p>
          </li>
          <li className={`${indexStyles.item} ${indexStyles.info}`}>
            <p>{description.details}</p>
            <p>{description.cta}</p>
          </li>
        </span>
      </ul>
    </div>
  );
};

export default Home;
