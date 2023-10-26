import type { TextBlock } from "@/types";
import React from "react";

type TextBlockPresenterProps = {
  block: TextBlock
};

export const TextBlockPresenter = ({
  block
}: TextBlockPresenterProps) => {
  return (
    <div className="my-4 text-lg font-medium" style={{ color: block.color, textAlign: block.align }}>
      {block.text}
    </div>
  );
};
