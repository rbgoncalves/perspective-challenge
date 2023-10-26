import { FunnelData } from "@/types";
import React, { useState } from "react";
import { Button } from "./Button";
import { TextBlockPresenter } from "./blocks/TextBlock";
import { ButtonBlockPresenter } from "./blocks/ButtonBlock";
import { ImageBlockPresenter } from "./blocks/ImageBlock";
import { ListBlockPresenter } from "./blocks/ListBlock";

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
        className="w-[375px] h-[600px] overflow-y-auto shadow-lg p-4 my-6"
        style={{ backgroundColor: funnelData.bgColor }}
      >
        {currentPage.blocks.map((block) => (
          <div key={block.id}>
            {block.type === "text" && <TextBlockPresenter block={block} />}
            {block.type === "image" && <ImageBlockPresenter block={block} />}
            {block.type === "list" && <ListBlockPresenter block={block} />}
            {block.type === "button" && <ButtonBlockPresenter block={block} />}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <Button onClick={handlePrevPage} disabled={currentPageIndex === 0}>
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
