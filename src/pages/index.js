import indexStyles from "@styles/index.module.css";
import Layout from "../components/layout/layout.js";
import Link from "next/link.js";
const description = {
  h2: "I enjoy crafting beautiful, inclusive and sustainable experiences and working on forward-thinking projects.",
  status: "This project is in also in progress.",
  about:
    "With over a decade in specialist  digital roles, I've become passionate about producing solutions that motivate and resonate with people.",
  aboutMe:
    "Having recently finsihed up studies in web design and development, I'm now building my portfolio and looking for opportunities to get stuck into new projects while exploring software engineering, UX, and UI design training.",
  cta: "If you're interested in collaborating, working together or exchanging ideas, please feel free to email me at hello[at]jencorbett.dev.",
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
                <span className={indexStyles.br} /> {description.about}
                <span className={indexStyles.br} />
                {description.aboutMe} <span className={indexStyles.br} />
                <Link
                  target="_blank"
                  className={indexStyles.link}
                  href="https://github.com/ajenstory/jencorbett.dev"
                >
                  {" "}
                  {description.status}
                </Link>{" "}
                <span className={indexStyles.br} /> {description.cta}{" "}
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
