import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts.js";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

import Layout from "../../components/layout.js";
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div>
      <Layout>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
          <Link className={utilStyles.center} href="/">
            ← Back to home{" "}
          </Link>
        </section>
      </Layout>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log(postData);
  return {
    props: {
      postData,
    },
  };
}
