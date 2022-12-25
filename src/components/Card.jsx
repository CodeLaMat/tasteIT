import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, image, country, flagLink }) {
  return (
    <div className={classes.card}>
      <div className={classes.imgs_container}>
        <div className={classes.img_food}>
          {" "}
          <img className={classes.img_food} src={image} alt="recipeImage" />
        </div>
        <div>
          <img className={classes.flag} src={flagLink} alt="flagImage" />
        </div>
      </div>
      <div className={classes.card_details}>
        <h3 className={classes.food_name}>
          {name[0].toUpperCase() + name.slice(1)}
        </h3>
        <p className={classes.food_country}>{country}</p>

        <Link to={`${name}`} className={classes.card_button}>
          See more
        </Link>
      </div>
    </div>
  );
}
