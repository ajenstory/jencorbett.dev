import Link from "next/link";
import Layout from "@layout/layout";
import indexStyles from "@styles/index.module.css";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Date from "@utils/date";

export default function PostPage({ posts }) {
  return (
    <Layout page>
      <div className={indexStyles.gridContainer}>
        {" "}
        {/* <Card /> */}
        <section>
          {" "}
          <h1 className={indexStyles.title}>Blog</h1>
          {posts.map(({ date, title, postUrl, summary, idx }) => (
            <div className={indexStyles.headingMd}>
              <ul
                className={`${indexStyles.list} ${indexStyles.grid}`}
                role="presentation"
                key={idx}
              >
                <Link href={`${postUrl}`}>
                  <li key={idx}>{title}</li>{" "}
                </Link>
                <li className={indexStyles.gridItem}>{summary}</li>
                <li className={indexStyles.gridItem}>
                  <Date dateString={date} />
                </li>
              </ul>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { posts } };
}
