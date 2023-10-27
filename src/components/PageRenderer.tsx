import { Block, Page } from "@/types";
import { TextBlockPresenter } from "./blocks/TextBlock";
import { ButtonBlockPresenter } from "./blocks/ButtonBlock";
import { ImageBlockPresenter } from "./blocks/ImageBlock";
import { ListBlockPresenter } from "./blocks/ListBlock";

type PageRendererProps = {
  page: Page;
};

const getBlockPresenter = (block: Block) => {
  switch (block.type) {
    case "text":
      return <TextBlockPresenter block={block} />;
    case "image":
      return <ImageBlockPresenter block={block} />;
    case "list":
      return <ListBlockPresenter block={block} />;
    case "button":
      return <ButtonBlockPresenter block={block} />;
  }
};
export const PageRenderer = ({ page }: PageRendererProps) => {
  return (
    <div className="p-4">
      {page.blocks.map((block) => (
        <div key={block.id}>
          {getBlockPresenter(block)}
        </div>
      ))}
    </div>
  );
};
