import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p> This app is created by Eyvaz Alishov </p>
      <p className={classes.copyright}>Copyright &copy; 2022</p>
    </footer>
  );
}
