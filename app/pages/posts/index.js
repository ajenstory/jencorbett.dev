import { compareDesc } from "date-fns";
import Link from "next/link";
import Header from "@components/header";
import indexStyles from "@styles/index.module.css";
import { allPosts } from "contentlayer/generated";

import { parseISO, format } from "date-fns";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {format(date, "'on' EEE LLLL, dd, yyyy 'at' p")}
    </time>
  );
};

export default function PostPage({ posts }) {
  return (
    <>
      <section className={`${indexStyles.wrapper} ${indexStyles.headingMd}`}>
        <Header />
        <h2 className={indexStyles.headingLg}>Blog</h2>
        {posts.map(({ date, title, postUrl, summary, idx }) => (
          <ul
            className={indexStyles.list}
            role="presentation"
            key={idx}
          >
            <Link href={`${postUrl}`}>
              <li key={idx}>{title}</li>{" "}
            </Link>
            <li>{summary}</li>
            <li>
              <Date dateString={date} />
            </li>
          </ul>
        ))}
      </section>
    </>
  );
}
export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { posts } };
}
