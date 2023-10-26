import { Property } from "csstype";

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
  color: Property.Color;
  align: Property.TextAlign;
};

export type ButtonBlock = BaseBlock & {
  type: "button";
  text: string;
  color: Property.Color;
  bgColor: Property.BackgroundColor;
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
