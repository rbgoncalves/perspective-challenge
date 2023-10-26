import type { ImageBlock } from "@/types";
import React from "react";

type ImageBlockPresenterProps = {
  block: ImageBlock
};

export const ImageBlockPresenter = ({
  block
}: ImageBlockPresenterProps) => {
  return (
    <img src={block.src} alt="Image" />
  );
};
