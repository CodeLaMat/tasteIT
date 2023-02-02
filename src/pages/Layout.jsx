import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import "./Layout.module.css";

export default function Layout() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
