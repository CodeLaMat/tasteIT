import React, { useState } from "react";
import classes from "../components/Recipes.module.css";
import Card from "./Card";

export default function Recipes({ recipes }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.recipesForm}>
      <div className={classes.searchBox}>
        <div>
          <h2>Search for recipes</h2>
        </div>
        <input
          className={classes.inputFiled}
          type="text"
          name="search"
          value={searchTerm}
          onChange={searchHandler}
        />
      </div>
      <div className={classes.cards}>
        {recipes &&
          recipes
            .filter((recipe) => {
              if (
                recipe.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim()) ||
                recipe.country
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim())
              ) {
                return recipe;
              }
            })
            .map((recipe) => (
              <Card
                key={recipe.id}
                id={recipe.id}
                name={recipe.name}
                country={recipe.country}
                image={recipe.image}
                flagLink={recipe.flagLink}
              />
            ))}
      </div>
    </div>
  );
}
