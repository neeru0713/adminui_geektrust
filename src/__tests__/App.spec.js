/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import React from "react"

it("renders Admin Page", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});
