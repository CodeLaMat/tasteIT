import React from "react";
import classes from "../components/Main.module.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className={classes.main}>
      <Outlet />
      {/* It is wehere we want to display the roots */}
    </main>
  );
};

export default Home;
