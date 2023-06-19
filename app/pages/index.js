import indexStyles from "@styles/index.module.css";

import Layout from "../components/layout.js";

// import Card from "../components/card.js";

const description = {
  title: "Hey! It's Jen.",
  body: "I'm currently developing this web app as a personal portfolio project",
  cta: "If you'd like to say hello, learn more about me or find out my availability, email: hello[at]jencorbett.dev.",
};

const Home = () => {
  return (
    <Layout home>
      <div className={indexStyles.gridContainer}>
        {/* <Card /> */}
        <section>
          {" "}
          <div className={indexStyles.title}> {description.title}</div>
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
