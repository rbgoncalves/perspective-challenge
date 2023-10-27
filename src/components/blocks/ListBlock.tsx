import type { ListBlock } from "@/types";
import React from "react";

type ListBlockPresenterProps = {
  block: ListBlock;
};

export const ListBlockPresenter = ({ block }: ListBlockPresenterProps) => {
  return (
    <ul>
      {block.items?.map((item) => (
        <li className="flex flex-row px-8 my-2" key={item.title}>
          {item.src && <img className="w-14 me-6" src={item.src} alt={item.title} />}
          <div>
            <h3 className="font-lg font-medium">{item.title}</h3>
            <p className="font-sm text-gray-500">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
