import classes from "./Nav.module.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavComp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#/">tasteIT</Navbar.Brand>
        <Nav className={classes.nav}>
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/recipes">Recipes</Nav.Link>
          <Nav.Link href="#/add_recipe">Add New Recipe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
