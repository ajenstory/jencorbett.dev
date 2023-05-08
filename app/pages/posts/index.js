import postStyles from "@styles/post.module.css";
import indexStyles from "@styles/index.module.css";
import { CreatedAt } from "../../components/date";
import { compareDesc } from "date-fns";
import Link from "next/link";

import { useEffect, useState } from "react";

import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostCard({ posts }) {
  return (
    <article className={`${indexStyles.article}`}>
      <p>{posts}</p>
    </article>
  );
}

export default function PostPage({ posts }) {
  const [date, setDate] = useState({});
  useEffect(() => setDate({}), []);

  return (
    <>
      <section
        className={`${indexStyles.container} ${indexStyles.section} ${postStyles.headingMd} ${postStyles.padding1px}`}
      >
        <PostCard />
        <div className={` ${date}`}>
          <ul className={`${postStyles.list}`}>
            {posts.map((post, idx) => (
              <li
                key={idx}
                className={postStyles.listItem}
              >
                <p>{post.title}</p> <Link href={`/${post.url}`}>read more</Link>{" "}
                <p className={postStyles.lightText}>
                  <CreatedAt dateString={post.date} />
                </p>{" "}
              </li>
            ))}
          </ul>
        </div>
        <Link
          className={``}
          href="/"
        >
          ← Back to home{" "}
        </Link>
      </section>
    </>
  );
}
