import indexStyles from "@styles/index.module.css";

import Layout from "../components/layout.js";

// import Card from "../components/card.js";

const description = {
  title: "Digital specialist turned developer",
  body: "I'm currently developing this web app as a personal portfolio project, please check out my github to follow my progress!",
  cta: "If you'd like to say hello, learn more about me or find out my availability, please connect with me via my socials or email: hello[at]jencorbett.dev. Look forward to hearing from you!",
};

const Home = () => {
  return (
    <Layout home>
      <div className={indexStyles.gridContainer}>
        {/* <Card /> */}
        <section>
          {" "}
          <h1 className={indexStyles.title}> {description.title}</h1>
          <div className={indexStyles.headingMd}>
            <ul className={`${indexStyles.grid}  ${indexStyles.list}`}>
              <li
                className={`${indexStyles.gridItem} ${indexStyles.headingMd}`}
              >
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
