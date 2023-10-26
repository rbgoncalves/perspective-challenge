export type Page = {
  id: string;
  blocks: Block[];
};

export type FunnelData = {
  name: string;
  bgColor: string;
  pages: Page[];
};

// ** Blocks **

type BaseBlock = {
  id: string;
  type: string;
};

export type TextBlock = BaseBlock & {
  type: "text";
  text: string;
  color: string;
  align: string;
};

export type ButtonBlock = BaseBlock & {
  type: "button";
  text: string;
  color: string;
  bgColor: string;
};

export type ImageBlock = BaseBlock & {
  type: "image";
  src: string;
};

export type ListBlock = BaseBlock & {
  type: "list";
  items: ListItem[];
};

type ListItem = {
  title: string;
  description: string;
  src: string;
};

export type Block = TextBlock | ImageBlock | ButtonBlock | ListBlock;
