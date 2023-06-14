import indexStyles from "@styles/index.module.css";

const description = {
  title: "Hey, I'm Jen.",
  intro: "I'm a digital specialist turned developer.",
  body: "I'm currently developing this portfolio project, please check out my github to follow my progress!",
  cta: "If you'd like to say hello, learn more about me or find out my availability, please connect with me via my socials or email: hello[at]jencorbett.dev. Look forward to hearing from you!",
};

const Home = () => {
  return (
    <section className={indexStyles.gridContainer}>
      <div className={indexStyles.gridItem}>
        <h1 className={indexStyles.title}> {description.title}</h1>
      </div>
      <div className={indexStyles.grid}>
        <div className={indexStyles.gridItem}>
          <p>{description.intro}</p>
          <p> {description.body}</p>
        </div>
        <div className={indexStyles.gridItem}>
          <p> {description.cta}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
