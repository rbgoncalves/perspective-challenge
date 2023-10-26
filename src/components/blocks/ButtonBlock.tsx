import type { ButtonBlock } from "@/types";
import React from "react";
import { Button } from "../Button";

type ButtonBlockPresenterProps = {
  block: ButtonBlock;
};

export const ButtonBlockPresenter = ({ block }: ButtonBlockPresenterProps) => {
  return (
    <Button onClick={() => null} className="w-full my-6" style={{ color: block.color, backgroundColor: block.bgColor }}>
      {block.text}
    </Button>
  );
};
