import indexStyles from "@styles/index.module.css";
import Layout from "../components/layout/layout.js";

const description = {
  h2: "I'm a web developer, designer and strategist based in Te Taitokerau, Aotearoa New Zealand.",
  status2: "As you can see, this portfolio site is in progress :)",
  aboutMe:
    "I am currently working on personal projects, and available for freelance collaborations while continuing my training in software engineering, UX, and UI design.",

  cta: "To get in touch, please email hello[at]jencorbett.dev.",
};

const Home = () => {
  return (
    <Layout home>
      <div className={indexStyles.gridContainer}>
        <section>
          {" "}
          <div className={indexStyles.headingMd}>
            <ul className={`${indexStyles.grid}  ${indexStyles.list}`}>
              <li className={indexStyles.title}>
                <h2>{description.h2}</h2>
              </li>
              <li className={indexStyles.listItem}>
                {" "}
                <span className={indexStyles.br} /> {description.status2}
                <span className={indexStyles.br} />
                {description.aboutMe}
                <span className={indexStyles.br} /> {description.cta}
                <span className={indexStyles.br} />
              </li>
            </ul>{" "}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
