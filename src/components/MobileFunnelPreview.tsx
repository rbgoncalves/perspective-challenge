import { FunnelData } from "@/types";
import React, { useState } from "react";
import { Button } from "./Button";
import { PageRenderer } from "./PageRenderer";

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
      <h1 className="text-center text-xl font-medium text-gray-700">
        {funnelData.name}
      </h1>
      <div
        className="w-[375px] h-[600px] overflow-y-auto shadow-lg my-6"
        style={{ backgroundColor: funnelData.bgColor }}
      >
        <PageRenderer page={currentPage} />
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
