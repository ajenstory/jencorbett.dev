import indexStyles from "@styles/index.module.css";
import Layout from "../components/layout/layout.js";

const description = {
  h2: "I'm a web, developer, designer and content specialist",
  intro:
    "My background spans over a decade in social media, digital marketing and communications",
  aboutMe:
    "I like to design and build digital experiences that are accessible, inclusive and sustainable.",
  status:
    "I recently completed a full-stack course at Developers Institute, and I'm currently building my portfolio while continuing to learn, and work on a few projects.",
  cta: "To get in touch, please contact me on hello[at]jencorbett.dev.",
};

const Home = () => {
  return (
    <Layout home>
      <div className={indexStyles.gridContainer}>
        <section>
          {" "}
          <div className={indexStyles.headingMd}>
            <ul className={`${indexStyles.grid}  ${indexStyles.list}`}>
              <li className={indexStyles.gridItem}>
                {" "}
                <h2 className={indexStyles.title}>{description.h2}</h2>
              </li>
              <li className={indexStyles.gridItem}>
                {" "}
                {description.aboutMe} <span className={indexStyles.br} />
                <span className={indexStyles.br} />
                {description.status} <span className={indexStyles.br} />
                {description.cta}
              </li>
            </ul>{" "}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
