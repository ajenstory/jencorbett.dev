import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import Date from "../../components/date.js";

import utilStyles from "../../styles/utils.module.css";
import { getMDXComponent } from "next-contentlayer/hooks";
import Layout from "../../components/layout.js";

export async function getStaticPaths() {
  const paths = allProjects.map((project) => project.url);
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = allProjects.find((doc) =>
    doc._raw.flattenedPath.includes(params.slug)
  );

  return {
    props: { project: project },
  };
}
function ProjectContent(project) {
  const Project = getMDXComponent(project.body.code);
  return (
    <div className="">
      <Project />
    </div>
  );
}

const Project = ({ project }) => {
  return (
    <>
      <div>
        <Layout>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <article>
              <h1 className={utilStyles.headingXl}>{project.title}</h1>
              <div className={utilStyles.lightText}>
                <Date dateString={project.date} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
              <ProjectContent {...project} />{" "}
            </article>
            <small className={utilStyles.lightText}>
              <Link
                className={utilStyles.center}
                href="/"
              >
                ← Back to home{" "}
              </Link>{" "}
            </small>
          </section>
        </Layout>
      </div>{" "}
    </>
  );
};

export default Project;
