import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { countriesURL } from "../components/utilities/api";
import classes from "../components/Add.module.css";

const Add = ({ recipes }) => {
  const [options, setOptions] = useState([]);
  const [ingredient, setIngredient] = useState([
    { name: "", quantity: "", unit: "" },
  ]);
  const [recipe, setRecipe] = useState({
    id: "",
    name: "",
    author: "",
    country: "",
    description: "",
    flagLink: "",
    ingredients: { name: "", quantity: "", unit: "" },
    image: "",
    preparation_time: "",
    servings: "",
  });

  useEffect(() => {
    axios.get(`${countriesURL}/all`).then((res) => {
      let arr = [];
      res.data.map((country) => {
        arr.push({
          value: country.name.common,
          label: country.name.common,
          name: country.flags.png,
        });

        setOptions(arr);
      });
    });
  }, []);

  const eventHandler = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onAddCountry = (newCountry) => {
    setRecipe({
      ...recipe,
      country: newCountry.value,
      flagLink: newCountry.name,
    });
  };

  const ingredientChange = (index, event) => {
    let data = [...ingredient];
    data[index][event.target.name] = event.target.value;
    setIngredient(data);
    setRecipe({
      ...recipe,
      ingredients: data,
    });
  };

  const addMore = () => {
    let newIngredient = { name: "", quantity: "", unit: "" };
    setIngredient([...ingredient, newIngredient]);
  };

  const postHandler = (e) => {
    axios
      .post("http://localhost:3002/recipes", recipe)
      .then(window.location.reload())
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.formContainer}>
      <div>
        <h2>Add a new recipe</h2>
      </div>
      <form>
        <div className={classes.nameInput}>
          <div className={classes.inputGroup}>
            <label htmlFor="name" className={classes.label}>
              Name
            </label>
            <input
              name="name"
              id="name"
              className={classes.input}
              type="text"
              onChange={eventHandler}
            />
            <div></div>
          </div>
        </div>
        <div className={classes.authorInput}>
          <div className={classes.inputGroup}>
            <label htmlFor="author" className={classes.label}>
              Author
            </label>
            <input
              name="author"
              id="author"
              className={classes.input}
              type="text"
              onChange={eventHandler}
            />
            <div></div>
          </div>
        </div>
        <div className={classes.countryInput}>
          <div className={classes.inputGroup}>
            <label htmlFor="countries" className={classes.label}>
              {" "}
            </label>
            Origin country:
            <Select
              options={options}
              name="country"
              required={true}
              value={recipe.country.value}
              onChange={onAddCountry}
              className={classes.input}
            />
          </div>
        </div>
        <div className={classes.descriptionInput}>
          <div className={classes.inputGroup}>
            <label htmlFor="description" className={classes.label}>
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className={classes.input}
              type="text"
              onChange={eventHandler}
            />
            <div></div>
          </div>
        </div>
        <div className={classes.imageLinkInput}>
          <div className={classes.inputGroup}>
            <label htmlFor="image" className={classes.label}>
              Image Link
            </label>
            <input
              name="image"
              id="image"
              className={classes.input}
              type="text"
              onChange={eventHandler}
            />
            <div></div>
          </div>
        </div>
        <div>
          {" "}
          <h2 className={classes.ing_heading}>Ingredients</h2>
          {ingredient.map((input, index) => {
            return (
              <div key={index} className={classes.ing_inputs}>
                <div className={classes.inputGroup}>
                  <label htmlFor="name" className={classes.label}>
                    Ingredient Name
                  </label>
                  <input
                    onChange={(event) => ingredientChange(index, event)}
                    name="name"
                    id="name"
                    className={classes.input}
                    type="text"
                    value={input.name}
                  />
                  <div></div>
                </div>
                <div className={classes.inputGroup}>
                  <label htmlFor="quantity" className={classes.label}>
                    Quantity
                  </label>
                  <input
                    onChange={(event) => ingredientChange(index, event)}
                    name="quantity"
                    id="quantity"
                    className={classes.input}
                    type="number"
                    value={input.quantity}
                  />
                  <div></div>
                </div>
                <div className={classes.inputGroup}>
                  <label htmlFor="unit" className={classes.label}>
                    Unit
                  </label>
                  <input
                    onChange={(event) => ingredientChange(index, event)}
                    name="unit"
                    id="unit"
                    className={classes.input}
                    type="text"
                    value={input.unit}
                  />
                  <div></div>
                </div>
              </div>
            );
          })}
          <div>
            <button type="button" className={classes.addBtn} onClick={addMore}>
              {" "}
              Add more
            </button>
          </div>
          <div className={classes.instructionInput}>
            <div className={classes.inputGroup}>
              <label htmlFor="instruction" className={classes.label}>
                Instruction
              </label>
              <textarea
                name="instruction"
                id="instruction"
                className={classes.input}
                type="text"
                onChange={eventHandler}
              />
              <div></div>
            </div>
          </div>
          <div className={classes.preTimeInput}>
            <div className={classes.inputGroup}>
              <label htmlFor="preparation_time" className={classes.label}>
                Requried time reqired to prepare (by minutes)
              </label>
              <input
                name="preparation_time"
                id="preparation_time"
                className={classes.input}
                type="number"
                onChange={eventHandler}
              />
              <div></div>
            </div>
          </div>
          <div className={classes.servingsInput}>
            <div className={classes.inputGroup}>
              <label htmlFor="servings" className={classes.label}>
                Servings
              </label>
              <input
                name="servings"
                id="servings"
                className={classes.input}
                type="number"
                onChange={eventHandler}
              />
              <div></div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={classes.submitBtn}
              onClick={postHandler}
            >
              <span>Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
