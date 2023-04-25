import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
// import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Header from "../components/header";
import { MDXProvider } from "@mdx-js/react";
export default function PostsPage({ posts }) {
  return (
    <>
      <MDXProvider>
        <Header />{" "}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h1>Posts</h1>
          <ul className={utilStyles.list}>
            {posts.map(({ id, date, title }) => (
              <li
                className={utilStyles.listItem}
                key={id}
              >
                <Link href={`/projects/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={JSON.parse(JSON.stringify(date))} />
                </small>
              </li>
            ))}
          </ul>{" "}
        </section>
      </MDXProvider>{" "}
      <Link
        className={utilStyles.center}
        href="/"
      >
        ← Back to home{" "}
      </Link>{" "}
    </>
  );
}

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
// export async function getStaticProps() {
//   const posts = getSortedPostsData();
//   return {
//     props: {
//       posts,
//     },
//   };
// }
