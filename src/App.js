import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Add from "./components/Add/Add";
import Recipe from "./components/Recipe/Recipe";
import "./App.css";
import { recipesURL } from "./components/utilities/api";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(recipesURL)
      .then((response) => {
        const fetchedRecipes = [];
        for (let key in response.data) {
          fetchedRecipes.push({
            id: key,
            ...response.data[key],
          });
        }
        setRecipes(fetchedRecipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/recipes" element={<Recipes recipes={recipes} />} />
            <Route
              path="recipes/:name"
              element={<Recipe recipes={recipes} />}
            />
            <Route path="/add_recipe" element={<Add />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
