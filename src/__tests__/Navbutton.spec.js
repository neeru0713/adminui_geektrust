/* eslint-disable no-undef */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbutton from "../components/Navbutton";

describe("Navbutton", () => {
  const mockNavbuttonHandler = jest.fn();
  const pageNumber = 2;
  const page = 3;

  it("should render correctly", () => {
    const { getByText } = render(
      <Navbutton
        NavbuttonHandler={mockNavbuttonHandler}
        pageNumber={pageNumber}
        page={page}
      />
    );
    const buttonElement = getByText(page.toString());

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bluebg");
    expect(buttonElement).not.toHaveClass("whitebg");
  });

  it("should call NavbuttonHandler when clicked", () => {
    const { getByText } = render(
      <Navbutton
        NavbuttonHandler={mockNavbuttonHandler}
        pageNumber={pageNumber}
        page={page}
      />
    );
    const buttonElement = getByText(page.toString());

    fireEvent.click(buttonElement);

    expect(mockNavbuttonHandler).toHaveBeenCalledTimes(1);
  });

  it("should have whitebg class when pageNumber equals page", () => {
    const { getByText } = render(
      <Navbutton
        NavbuttonHandler={mockNavbuttonHandler}
        pageNumber={page}
        page={page}
      />
    );
    const buttonElement = getByText(page.toString());

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("whitebg");
    expect(buttonElement).not.toHaveClass("bluebg");
  });
});
