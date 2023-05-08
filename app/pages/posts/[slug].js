import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

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
function PostBody(post) {
  const Post = getMDXComponent(post.body.code);
  return (
    <div className="">
      <Post />
    </div>
  );
}

const Post = ({ post, title, date, summary, image, body }) => {
  return (
    <>
      <div>
        {" "}
        <p title={title}>{post.title}</p>
        <p date={date}>{post.date}</p>
      </div>
      <PostBody {...post} />
      <div></div>
    </>
  );
};
export default Post;
