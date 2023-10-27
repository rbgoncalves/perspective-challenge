import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MobileFunnelPreview } from "../MobileFunnelPreview";
import { FunnelData } from "@/types";

const mockFunnelData: FunnelData = {
  name: "Test Funnel",
  bgColor: "#F5F5F5",
  pages: [
    {
      id: "page1",
      blocks: [
        {
          id: "text1",
          type: "text",
          text: "Welcome to Page 1",
          color: "blue",
          align: "left"
        },
      ],
    },
    {
      id: "page2",
      blocks: [
        {
          id: "text2",
          type: "text",
          text: "Welcome to Page 2",
          color: "red",
          align: "center"
        },
      ],
    },
  ],
};

describe(__filename, () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <MobileFunnelPreview funnelData={mockFunnelData} />
    );

    expect(getByText("Test Funnel")).toBeInTheDocument();

    expect(getByText("Welcome to Page 1")).toBeInTheDocument();

    expect(getByText("Next Page")).toBeEnabled();
  });

  test("handles navigation between pages", () => {
    const { getByText } = render(
      <MobileFunnelPreview funnelData={mockFunnelData} />
    );

    fireEvent.click(getByText("Next Page"));

    expect(getByText("Welcome to Page 2")).toBeInTheDocument();

    expect(getByText("Previous Page")).toBeEnabled();

    fireEvent.click(getByText("Previous Page"));

    expect(getByText("Welcome to Page 1")).toBeInTheDocument();
  });
});
