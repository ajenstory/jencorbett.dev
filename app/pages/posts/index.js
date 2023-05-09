// import postStyles from "@styles/post.module.css";
// import indexStyles from "@styles/index.module.css";

import { compareDesc } from "date-fns";
import Link from "next/link";

import { allPosts } from "contentlayer/generated";
console.log(allPosts);
export async function getStaticProps() {
  console.log(allPosts);
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  console.log(posts);
  return { props: { posts } };
}

function PostCard(post) {
  return <article className=""></article>;
}

export default function PostPage({ posts }) {
  return (
    <>
      <section className={``}>
        <div className="">
          <PostCard />
          <ul className={``}>
            {posts.map((post, idx) => (
              <ul>
                {" "}
                <li>{post.date}</li>
                <Link href={`${post.postUrl}`}>
                  <li
                    key={idx}
                    className={``}
                  >
                    {post.title}
                    <small className={``}></small>{" "}
                  </li>
                </Link>
                <li> {post.summary}</li>
              </ul>
            ))}
          </ul>
        </div>
        <small className={``}>
          <Link
            className={``}
            href="/"
          >
            ← Back to home{" "}
          </Link>{" "}
        </small>
      </section>
    </>
  );
}
