import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import Link from "next/link";
import Header from "../components/header";
import { getSortedProjectsData } from "../lib/projects";
import { MDXProvider } from "@mdx-js/react";
export default function ProjectsPage({ allProjectsData }) {
  return (
    <>
      <> </>
      <MDXProvider>
        <Header />
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h1>Latest projects</h1>
          <ul className={utilStyles.list}>
            {allProjectsData.map(({ id, date, title }) => (
              <li
                className={utilStyles.listItem}
                key={id}
              >
                <Link href={`/projects/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={JSON.parse(JSON.stringify(date))} />
                </small>
              </li>
            ))}
          </ul>{" "}
        </section>
        <Link
          className={utilStyles.center}
          href="/"
        >
          ← Back to home{" "}
        </Link>
      </MDXProvider>
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
