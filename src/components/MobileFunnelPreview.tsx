import { FunnelData } from "@/types";
import React, { useState } from "react";
import { Button } from "./Button";

type MobileFunnelPreviewProps = {
  funnelData: FunnelData;
};

export const MobileFunnelPreview = ({
  funnelData,
}: MobileFunnelPreviewProps) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = funnelData.pages[currentPageIndex];

  const handleNextPage = () => {
    setCurrentPageIndex((prevIndex) =>
      prevIndex < funnelData.pages.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevPage = () => {
    setCurrentPageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div>
      <h1>{funnelData.name}</h1>
      <div
        className="w-[375px] h-[600px] overflow-y-auto shadow-lg p-4"
        style={{ backgroundColor: funnelData.bgColor }}
      >
        {currentPage.blocks.map((block) => (
          <div key={block.id}>
            {block.type === "text" && (
              <div style={{ color: block.color, textAlign: block.align }}>
                {block.text}
              </div>
            )}
            {block.type === "image" && <img src={block.src} alt="Image" />}
            {block.type === "list" && (
              <ul>
                {block.items?.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <img src={item.src} alt="List Item" />
                  </li>
                ))}
              </ul>
            )}
            {block.type === "button" && (
              <button
                style={{ color: block.color, backgroundColor: block.bgColor }}
              >
                {block.text}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <Button
          onClick={handlePrevPage}
          disabled={currentPageIndex === 0}
        >
          Previous Page
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={currentPageIndex === funnelData.pages.length - 1}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};
