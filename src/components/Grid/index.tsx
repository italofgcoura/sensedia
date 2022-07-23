import React, { useContext } from "react";

import { HomeContext } from "../../context/HomeContext";

import { GridComponent } from "./styles";

import GridCard from "../GridCard";

const Grid: React.FC = () => {
  const { filtered } = useContext(HomeContext);

  return (
    <GridComponent>
      {filtered.map((item) => (
        <GridCard
          key={item.id}
          title={item.title?.substring(0, 10).concat("...")!}
          author={item.author!}
          body={item.body?.substring(0, 140).concat("...")!}
          createDate={item.createDate!}
        />
      ))}
    </GridComponent>
  );
};

export default Grid;
