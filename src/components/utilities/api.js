import axios from "axios";

export default axios.create({
  baseURL: "https://tasteit-9c866-default-rtdb.firebaseio.com/",
});

export const countriesURL = "https://restcountries.com/v3.1";
export const recipesURL =
  "https://tasteit-9c866-default-rtdb.firebaseio.com/recipes.json";
