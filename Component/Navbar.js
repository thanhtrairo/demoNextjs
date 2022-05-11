import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        marginTop: "10px",
      }}
    >
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <Link href="/about" passHref>
        <a>About</a>
      </Link>
      <Link href="/post" passHref>
        <a>Post</a>
      </Link>
      <Link href="/random" passHref>
        <a>Random</a>
      </Link>
    </div>
  );
}
