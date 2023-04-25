import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import Date from "../../components/date.js";
import utilStyles from "../../styles/utils.module.css";

import { getMDXComponent } from "next-contentlayer/hooks";
import Layout from "../../components/layout.js";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((doc) =>
    doc._raw.flattenedPath.includes(params.slug)
  );

  return {
    props: { post: post },
  };
}
function PostContent(post) {
  const Post = getMDXComponent(post.body.code);
  return (
    <div className="">
      <Post />
    </div>
  );
}

const Post = ({ post }) => {
  return (
    <div>
      <Layout>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <article>
            <h1 className={utilStyles.headingXl}>{post.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={post.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            <PostContent {...post} />{" "}
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
    </div>
  );
};

export default Post;
