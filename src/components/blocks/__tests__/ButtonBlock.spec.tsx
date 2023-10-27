import React from "react";
import { render } from "@testing-library/react";
import { ButtonBlockPresenter } from "../ButtonBlock";
import { ButtonBlock } from "@/types";

const mockButtonBlock: ButtonBlock = {
  id: "1",
  type: "button",
  text: "Test Button",
  color: "red",
  bgColor: "blue",
};

describe(__filename, () => {
  test("ButtonBlock renders", () => {
    const { getByText, getByRole } = render(
      <ButtonBlockPresenter block={mockButtonBlock} />
    );

    const buttonText = getByText("Test Button");
    expect(buttonText).toBeInTheDocument();

    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toHaveStyle("color: red");
    expect(buttonElement).toHaveStyle("background-color: blue");
  });
});
