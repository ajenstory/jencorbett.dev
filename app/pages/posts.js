import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Header from "../components/header";

export default function PostsPage({ allPostsData }) {
  return (
    <>
      <> </> <Header />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>Latest posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li
              className={utilStyles.listItem}
              key={id}
            >
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={JSON.parse(JSON.stringify(date))} />
              </small>
            </li>
          ))}
        </ul>{" "}
      </section>
    </>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
