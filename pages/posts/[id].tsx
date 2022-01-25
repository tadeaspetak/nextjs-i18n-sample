import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  postData: { title: string; date: number; content: string };
}

const Post: NextPage<Props> = ({ postData: { title, date, content } }) => {
  const { locale } = useRouter();
  return (
    <Layout>
      <Head>
        <title>{title[locale]}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title[locale]}</h1>
        <div className={utilStyles.lightText}>
          <span>{new Date(date).toISOString()}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content[locale] }} />
      </article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const data = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  console.log({ data });
  return { props: { postData: await data.json() } };
};

export default Post;
