import indexStyles from "@styles/index.module.css";
import Header from "@components/header";

const description = {
  title: "Digital specialist turned developer",
  body: "I'm currently developing this portfolio project, please check out my github to follow my progress!",
  cta: "If you'd like to say hello, learn more about me or find out my availability, please connect with me via my socials or email: hello[at]jencorbett.dev. Look forward to hearing from you!",
};

const Home = () => {
  return (
    <div className={indexStyles.gridContainer}>
      {" "}
      <Header home />
      <section>
        <ul className={`${indexStyles.grid} ${indexStyles.list}`}>
          <li className={`${indexStyles.gridItem} `}>
            <h2 className={indexStyles.headingXL}> {description.title}</h2>
            <p>{description.intro}</p>
            <p> {description.body}</p>
          </li>
          <li className={indexStyles.gridItem}>
            <p> {description.cta}</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
