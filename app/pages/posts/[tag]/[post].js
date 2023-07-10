import { allPosts } from "contentlayer/generated";
import indexStyles from "@styles/index.module.css";
import Head from "next/head";
import Date from "@utils/date";
import { useMDXComponent } from "next-contentlayer/hooks";
import Layout from "@layout/layout";

const Post = ({ post }) => {
  const Body = useMDXComponent(post.body.code);

  return (
    <>
      <Layout page>
        <Head>
          <title>{post.title}</title>
        </Head>

        <div className={indexStyles.gridContainer}>
          <article className={indexStyles.wrapper}>
            <h2 className={indexStyles.title}>{post.title}</h2>
            <div className={indexStyles.lightText}>
              <Date dateString={post.date} />
            </div>
            <ul className={`${indexStyles.grid}  ${indexStyles.list}`}>
              <li className={`${indexStyles.gridItem} `}>
                <Body
                  className={indexStyles.padding1px}
                  post={post}
                />
              </li>
            </ul>
          </article>
        </div>
      </Layout>
    </>
  );
};
export async function getStaticPaths() {
  const paths = allPosts.map((post) => `/${post.postUrl}`);

  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps = ({ params }) => {
  const post = allPosts.find(
    (doc) =>
      doc._raw.flattenedPath === params.doc ||
      `/posts/${params.tag}/${params.doc}`
  );

  return { props: { post } };
};
export default Post;
