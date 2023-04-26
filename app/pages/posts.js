import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import { compareDesc } from "date-fns";
import Link from "next/link";
import Header from "../components/header";
import Layout from "components/layout";
import { allPosts } from "contentlayer/generated";
console.log(allPosts);
export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
function PostCard(post) {
  return (
    <article className="">
      <p>
        {" "}
        <Link href={post.url}>{post.title}</Link>
      </p>
    </article>
  );
}

export default function PostPage({ posts }) {
  return (
    <>
      <Header />
      <Layout>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className="">
            <ul className={utilStyles.list}>
              {posts.map((post, idx) => (
                <li
                  key={idx}
                  className={utilStyles.listItem}
                >
                  <PostCard {...post}>{post.title}</PostCard>
                  <small className={utilStyles.lightText}>
                    <Date dateString={JSON.parse(JSON.stringify(post.date))} />{" "}
                  </small>{" "}
                </li>
              ))}
            </ul>
          </div>
          <small className={utilStyles.lightText}>
            <Link
              className={utilStyles.center}
              href="/"
            >
              ← Back to home{" "}
            </Link>{" "}
          </small>
        </section>
      </Layout>
    </>
  );
}
