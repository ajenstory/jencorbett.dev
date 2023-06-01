import indexStyles from "@styles/index.module.css";

const description = {
  title: "My story starts in 1992...",
  intro: "To be continued... please check back soon!",
  cta: "If you'd like to learn more or check my availability, email me at hello[at]jencorbett.dev",
};

const Home = () => {
  return (
    <div className={indexStyles.gridContainer}>
      <ul className={indexStyles.grid}>
        <li className={indexStyles.gridItem}>
          <span className={`${indexStyles.item} ${indexStyles.intro}`}>
            <h1 className={indexStyles.title}> {description.title}</h1>
          </span>{" "}
          <p>{description.intro}</p>
        </li>
        <li>
          {" "}
          <p>{description.cta}</p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
