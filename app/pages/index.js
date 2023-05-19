import indexStyles from "@styles/index.module.css";
import Header from "@components/header.js";

const description = {
  title: "Hey, I'm Jen Corbett",
  intro: "I'm currently working on my portfolio, please check back soon!",
  cta: "I'm a web development graduate seeking opportunities to work in front-end development.",
  details:
    "To say hi or check my availability, please feel free to email me at hello[at]jencorbett.dev",
  social:
    "You can also connect with me on LinkedIn, Twitter, Mastodon, or GitHub.",
};

const Home = () => {
  return (
    <div className={indexStyles.sectionContainer}>
      <div className={`${indexStyles.body} ${indexStyles.indexContent}`}>
        <ul className={indexStyles.headerContent}>
          <li className={indexStyles.headerImg}>
            <Header home />
          </li>
          <li className={indexStyles.intro}>
            <h1 className={indexStyles.title}>{description.title}</h1>
            <p>{description.intro}</p>
            <p>{description.cta}</p>
            <p>{description.social}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
