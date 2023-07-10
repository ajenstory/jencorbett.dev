import indexStyles from "@styles/index.module.css";
import Layout from "../components/layout/layout.js";

const description = {
  body: "I'm currently developing this site as a personal portfolio project.",
  cta: "If you'd like to say hello, learn more about me or find out my availability for work, email: hello[at]jencorbett.dev.",
};

const Home = () => {
  return (
    <Layout home>
      <div className={indexStyles.gridContainer}>
        {/* <Card /> */}
        <section>
          {" "}
          <div className={indexStyles.headingMd}>
            <ul className={`${indexStyles.grid}  ${indexStyles.list}`}>
              <li className={`${indexStyles.gridItem}`}>
                {description.intro}
                {description.body}
              </li>
              <li className={indexStyles.gridItem}>{description.cta}</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
