import React from "react";


import { GridComponent } from "./styles";

import GridCard from "../GridCard";

interface iItem {
  id: number;
  title: string;
  author: string;
  body: string;
  createDate: string;
}

const Grid: React.FC<any> = ({items}) => {

  return (
    <GridComponent>
      {items.map((item: iItem) => (
        <GridCard
          key={item.id}
          title={item.title?.substring(0, 10).concat("...")!}
          author={item.author!}
          body={item.body?.substring(0, 130).concat("...")!}
          createDate={item.createDate!}
        />
      ))}
    </GridComponent>
  );
};

export default Grid;
