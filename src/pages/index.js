import indexStyles from "@styles/index.module.css";
import Layout from "../components/layout/layout.js";

const description = {
  h2: "I'm a developer, designer and digital specialist.",
  aboutMe:
    "I bring together the best of my creative, technical and content development skills to produce engaging digital experiences.",
  status:
    "I'm currently building my portfolio, furthering my training in software engineering, UX and UI design, while working on a few different projects.",
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
                <span className={indexStyles.br} />
                {description.aboutMe}
                <span className={indexStyles.br} /> {description.status}
                <span className={indexStyles.br} />
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
