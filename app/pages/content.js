import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allContents } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export async function getStaticProps() {
  const contents = allContents.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { contents } };
}

function ContentCard(content) {
  const Content = getMDXComponent(content.body.code);

  return (
    <div className="mb-6">
      <time
        dateTime={content.date}
        className="block text-sm text-gray-600"
      >
        {format(parseISO(content.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Content />
      </h2>
    </div>
  );
}

export default function Content({ contents }) {
  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="text-3xl font-bold mb-8">Contentlayer Blog Example</h1>

      {contents.map((content, idx) => (
        <ContentCard
          key={idx}
          {...content}
        />
      ))}
    </div>
  );
}
