import React from "react";
import Navbar from "./Navbar";

export default function ({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
