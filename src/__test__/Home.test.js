import "@testing-library/jest-dom";
import React from "react";
import { createMemoryHistory } from "history";
import Home from "../components/Home/Home";
import { BrowserRouter as Routes, Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  test("renders correctly", () => {
    render(
      <Routes>
        <Home />
      </Routes>
    );

    const browseButton = screen.getByRole("button", {
      name: /browse recipes/i,
    });
    expect(browseButton).toBeInTheDocument();

    const videoElement = screen.getByTestId("videoElement");
    expect(videoElement).toBeTruthy();
    expect(videoElement.getAttribute("src")).toBeTruthy();
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute("src", "header.mp4");
    expect(videoElement).toHaveAttribute("autoPlay");
    expect(videoElement).toHaveAttribute("loop");
    expect(videoElement).toHaveClass("header_container_video_bg");
  });

  it("renders component", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );
    expect(history.location.pathname).toBe("/");
  });
});
