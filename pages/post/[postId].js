import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: { postId: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.postId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: { post: data },
  };
};

export default function PostDetail({ post }) {
  const router = useRouter();
  const handleSubmid = () => {
    router.push(`/post`);
  };
  return (
    <div style={{ margin: "30px" }}>
      <p>User {post.id}</p>
      <p>Title {post.title}</p>
      <button onClick={handleSubmid}>Back</button>
    </div>
  );
}
