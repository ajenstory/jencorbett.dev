import { getAllProjectIds, getProjectData } from "../../lib/projects.js";
import utilStyles from "../../styles/utils.module.css";
import * as React from "react";

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectsData }) {
  return (
    <div>
      <Header />
      <article>
        <h1 className={utilStyles.headingXl}>{projectsData.title}</h1>
        <Date dateString={projectsData.date} />
        <div dangerouslySetInnerHTML={{ __html: projectsData.contentHtml }} />
      </article>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const projectsData = await getProjectData(params.id);
  console.log(projectData);
  return {
    props: {
      projectsData,
    },
  };
}
