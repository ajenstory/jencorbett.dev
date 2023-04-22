import Link from "next/link";
import { getAllProjectIds, getProjectData } from "../../lib/projects.js";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Header from "../../components/header";

import Layout from "../../components/layout.js";
export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  return (
    <div>
      <Layout>
        <section>
          <article>
            <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={projectData.date} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
            />
          </article>
          <Link className={utilStyles.center} href="/">
            ← Back to home{" "}
          </Link>{" "}
        </section>
      </Layout>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  console.log(projectData);
  return {
    props: {
      projectData,
    },
  };
}
