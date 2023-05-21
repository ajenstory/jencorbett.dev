import { allPosts } from "contentlayer/generated";
import indexStyles from "@styles/index.module.css";

import { useMDXComponent } from "next-contentlayer/hooks";
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

const Post = ({ post }) => {
  const Body = useMDXComponent(post.body.code);


  return (
    <>
      <div className={indexStyles.container}>
        <section >
          <article className={indexStyles.wrapper}>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
            <Body post={...post} />
          </article>
        </section>
      </div>
    </>
  );
};

export default Post;
