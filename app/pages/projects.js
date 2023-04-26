import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import { compareDesc } from "date-fns";
import Link from "next/link";
import Header from "../components/header";
import Layout from "components/layout";
import { allProjects } from "contentlayer/generated";
console.log(allProjects);
export async function getStaticProps() {
  const projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { projects } };
}
function ProjectCard(project) {
  return (
    <article className="">
      <p>
        {" "}
        <Link href={project.url}>{project.title}</Link>
      </p>
    </article>
  );
}

export default function ProjectPage({ projects }) {
  return (
    <>
      {" "}
      <Header />
      <Layout>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className="">
            <ul className={utilStyles.list}>
              {projects.map((project, idx) => (
                <li
                  key={idx}
                  className={utilStyles.listItem}
                >
                  <ProjectCard {...project}>{project.title}</ProjectCard>
                  <small className={utilStyles.lightText}>
                    <Date
                      dateString={JSON.parse(JSON.stringify(project.date))}
                    />{" "}
                  </small>{" "}
                </li>
              ))}
            </ul>
          </div>
          <small className={utilStyles.lightText}>
            <Link
              className={utilStyles.center}
              href="/"
            >
              ← Back to home{" "}
            </Link>{" "}
          </small>
        </section>{" "}
      </Layout>
    </>
  );
}
