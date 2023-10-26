export type Page = {
  id: string;
  blocks: Block[];
};

export type FunnelData = {
  name: string;
  bgColor: string;
  pages: Page[];
};

type BaseBlock = {
    id: string;
    type: string;
  };
  

export type Block = BaseBlock