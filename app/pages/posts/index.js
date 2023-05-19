import { compareDesc } from "date-fns";
import Link from "next/link";
import indexStyles from "@styles/index.module.css";
import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { posts } };
}

export default function PostPage({ posts }) {
  return (
    <>
      <section className={`${indexStyles.wrapper}`}>
        {posts.map((post, idx) => (
          <ul key={idx}>
            {" "}
            <li>{post.date}</li>
            <Link href={`${post.postUrl}`}>
              <li
                key={idx}
                className={``}
              >
                {post.title}
              </li>
            </Link>
            <li> {post.summary}</li>
          </ul>
        ))}
      </section>
    </>
  );
}
