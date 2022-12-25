import { NavLink } from "react-router-dom";
import classes from "../components/Nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/add_recipe">Add New Recipe</NavLink>
        </li>
      </ul>
    </nav>
  );
}
