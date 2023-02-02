import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Add from "./components/Add/Add";
import Recipe from "./components/Recipe/Recipe";

import { recipesURL } from "./components/utilities/api";
import "./App.css";

//This is for letting Route to acknowledge the class component

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(recipesURL).then((response) => setRecipes(response.data));
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
