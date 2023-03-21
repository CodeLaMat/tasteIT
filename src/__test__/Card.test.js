import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Routes } from "react-router-dom";
import SingleCard from "../components/Card/Card";

describe("SingleCard component tests", () => {
  test("displays the correct food name", () => {
    const foodName = "pizza";
    render(
      <Routes>
        <SingleCard name={foodName} />
      </Routes>
    );

    expect(screen.getByText("See more")).toBeInTheDocument();
  });
});
