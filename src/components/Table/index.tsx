import React from "react";

import { TableComponent, TableRow, TableHead, TableData } from "./styles";

import { Info } from "../InfoText";

interface iItem {
  id: number;
  title: string;
  author: string;
  body: string;
  createDate: string;
}

const Table: React.FC<any> = ({ items }) => {
  return (
    <TableComponent>
      <thead>
        <tr>
          <TableHead width={"10%"} scope="col" centralized>
            POST ID
          </TableHead>
          <TableHead width={"15%"} scope="col">
            TITLE
          </TableHead>
          <TableHead width={"15%"} scope="col">
            AUTHOR
          </TableHead>
          <TableHead width={"35%"} scope="col">
            BODY
          </TableHead>
          <TableHead width={"25%"} scope="col">
            CREATION DATE
          </TableHead>
        </tr>
      </thead>
      <tbody>
        {items.map((item: iItem) => (
          <TableRow key={item.id}>
            <TableData width={"10%"}>
              <Info centralized>{item.id}</Info>
            </TableData>
            <TableData width={"15%"}>
              <Info>{item.title?.substring(0, 10).concat("...")}</Info>
            </TableData>
            <TableData width={"15%"}>
              <Info bold>{item.author}</Info>
            </TableData>
            <TableData width={"35%"}>
              <Info>{item.body?.substring(0, 30).concat("...")}</Info>
            </TableData>
            <TableData width={"25%"}>{item.createDate}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TableComponent>
  );
};

export default Table;
