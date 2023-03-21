import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import { getSortedProjectsData } from "../lib/projects";
import Link from "next/link";
import Header from "../components/header";

export default function ProjectsPage({ allProjectsData }) {
  return (
    <>
      <> </> <Header />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>Latest projects</h2>
        <ul>
          {allProjectsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={JSON.parse(JSON.stringify(date))} />
              </small>
            </li>
          ))}
        </ul>{" "}
      </section>
    </>
  );
}
export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
