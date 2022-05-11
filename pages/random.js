import Link from "next/link";
import React from "react";

export const getServerSideProps = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function random({ data }) {
  return (
    <div style={{ margin: "30px" }}>
      <Link href={`/random`} passHref>
        <a style={{ backgroundColor: "green" }}>Random</a>
      </Link>
      <h1>{data.value}</h1>
    </div>
  );
}
