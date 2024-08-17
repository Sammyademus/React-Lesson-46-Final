import React from "react";
import Navbar from "./Navbar";
//import List from "../components/List";
import Api from "../components/api/Api";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <List /> */}
      <h2>Welcome to our landing page</h2>
      <Api />
    </>
  );
}

//navbar should be imported into the home page
