import React from "react";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

export const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default function Post({ props }) {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    fetcher,
    { fallbackData: props, refreshInterval: 2000 }
  );
  if (!data) return <h1>Loangding ...</h1>;
  if (error) return <h1>Error loading data ...</h1>;
  return (
    <>
      <Head>
        <title>Post</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ margin: "30px 0" }}>
        <ul>
          {data.map((post) => (
            <li
              key={post.id}
              style={{
                listStyle: "none",
                margin: "30px 0",
                backgroundColor: "green",
                color: "white",
                maxWidth: "50%",
              }}
            >
              <Link href={`post/${post.id}`} passHref>
                <a>User {post.id}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}