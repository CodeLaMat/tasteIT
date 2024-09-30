import React from "react";
import Card from "react-bootstrap/Card";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

export default function SingleCard({ name, image, country, flagLink }) {
  return (
    <Card style={{ width: "18rem" }}>
      <div className={classes.singleCard}>
        <div className={classes.imgs_container}>
          <Card.Img
            variant="top"
            className={classes.img_food}
            src={image ? image : "../../assets/generic_food.png"}
          />{" "}
          <img className={classes.flag} src={flagLink} alt="flagImage" />
        </div>
        <div className={classes.card_details}>
          <Card.Title>{name[0].toUpperCase() + name.slice(1)}</Card.Title>
          <Card.Text>{country}</Card.Text>

          <Link to={`${name}`} className={classes.card_button}>
            See more
          </Link>
        </div>
      </div>
    </Card>
  );
}
