import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import classes from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
