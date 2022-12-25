import React from "react";

import { useParams } from "react-router-dom";

import classes from "./Recipe.module.css";

const Recipe = ({ recipes }) => {
  const { name } = useParams();

  return (
    <div>
      {recipes
        .filter((recipe) => recipe.name === name)
        ?.map((recipe) => (
          <div key={recipe.id} className={classes.card_container}>
            <div>
              <div className={classes.imgs_container}>
                <div>
                  {" "}
                  <img
                    className={classes.img_food}
                    src={recipe.image}
                    alt="recipeImage"
                  />
                </div>
                <div>
                  <img
                    className={classes.flag}
                    src={recipe.flagLink}
                    alt="flagImage"
                  />
                </div>
              </div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td className={classes.table_header} colSpan="3">
                        Ingredients:
                      </td>
                    </tr>{" "}
                    {recipe.ingredients.map((ingredient) => (
                      <tr key={ingredient.name}>
                        <td>{ingredient.name}</td>
                        <td>{ingredient.quantity}</td>
                        <td>{ingredient.unit}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className={classes.table_header} colSpan="3">
                        Preperation time:
                      </td>
                    </tr>{" "}
                    <tr>
                      <td colSpan="2">{recipe.preparation_time}</td>
                      <td>min</td>
                    </tr>
                    <tr>
                      <td className={classes.table_header} colSpan="3">
                        Servings:
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">{recipe.servings}</td>
                      <td>person</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={classes.recipe_info}>
              <h3 className={classes.recipe_infoSubtitle}>Name: </h3>
              <p className={classes.recipe_infoContent}>{recipe.name}</p>
              <h3 className={classes.recipe_infoSubtitle}>Author: </h3>
              <p className={classes.recipe_infoContent}>{recipe.author}</p>
              <h3 className={classes.recipe_infoSubtitle}>Country: </h3>
              <p className={classes.recipe_infoContent}>{recipe.country}</p>
              <h3 className={classes.recipe_infoSubtitle}>Description: </h3>
              <p className={classes.recipe_infoContent}>{recipe.description}</p>

              <h3 className={classes.recipe_infoSubtitle}>Instructions: </h3>
              <p className={classes.recipe_infoContent}>{recipe.instruction}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Recipe;
