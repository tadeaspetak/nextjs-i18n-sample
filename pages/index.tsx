import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import Link from "next-translate-routes/link";
import { useRouter } from "next/router";

interface Props {
  allPostsData: {
    id: string;
    date: number;
    title: { en: string; es: string };
  }[];
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  const { locale } = useRouter();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          (This is a sample website - you&apos;ll be building a site like this
          in <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title[locale]}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <span>{new Date(date).toISOString()}</span>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = await fetch("http://localhost:3000/api/posts");
  return { props: { allPostsData: await data.json() } };
};
