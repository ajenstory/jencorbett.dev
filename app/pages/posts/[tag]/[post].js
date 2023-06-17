import { allPosts } from "contentlayer/generated";
import indexStyles from "@styles/index.module.css";
import { parseISO, format } from "date-fns";
import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";
import Layout from "@components/layout";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {format(date, "'on' EEE LLLL, dd, yyyy 'at' p")}
    </time>
  );
};


const Post = ({ post }) =>
{
  
  const Body = useMDXComponent(post.body.code);
  
  return (
<div> 
          <Head>
          <title>{ post.title }</title> 
      </Head>
        <article >
          <h1 className={ indexStyles.headingXl }>{ post.title }</h1>
           <div className={indexStyles.lightText}>  <Date dateString={post.date} /></div> 
        <Body
          className={indexStyles.padding1px}
          post={ ...post }
          />
          </article>
    </div>

  );
};
export async function getStaticPaths() {
  const paths = allPosts.map((post) => `/${post.postUrl}`);

  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps = ({ params }) => {

  const post = allPosts.find(
    (doc) =>
      doc._raw.flattenedPath === params.doc ||
      `/posts/${params.tag}/${params.doc}`
  );

  return { props: { post,  } };
};
export default Post;
