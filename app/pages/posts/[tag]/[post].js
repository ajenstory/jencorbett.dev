import { allPosts } from "contentlayer/generated";
// import { useMDXComponent } from "@mdx-js/react";
// import postStyles from "@styles/posts.module.css";
console.log(allPosts);
export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.postUrl);

  console.log(paths, `log paths`);
  // ['/posts/hello-world']

  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps = ({ params }) => {
  console.log(params, `log params`);
  console.log(params.post, `log params post`);
  console.log(params.flattenedPath, `log params flattened path`);
  // { slug: 'tech', post: 'hello-world' } log params
  const slug = allPosts.find(
    (post) => post._raw.flattenedPath === params.postUrl
  );
  console.log(slug);
  return { props: { tag: params.tag, post: params.post } };
};

// export function PostContent({ tag, post }) {
//   console.log(post);
//   console.log(tag);

//   const Post = useMDXComponent(post.body.code);

//   return (
//     <div className="">
//       <Post {...post}> {post}</Post>
//       {/* <Link href={post.slug}>{post.title}</Link> */}
//     </div>
//   );
// }

const Post = ({ post }) => {
  // const PostContent = useMDXComponent(post.body.code);

  return (
    <>
      <div>
        <section className={``}>
          <article>
            <h1>{post}</h1>
            {/* <div className={postStyles.lightText}>
              <Date dateString={post.date} />
            </div> */}
            {/* <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} /> */}
            {/* <PostContent /> */}
          </article>
        </section>
      </div>
    </>
  );
};

export default Post;
