import React, { useContext } from "react";

import { TableComponent, TableRow, TableHead, TableData } from "./styles";

import { Info } from "../InfoText";

import arrowDown from "../../assets/images/keyboard_arrow_down_black_24dp.svg";

import { HomeContext } from "../../context/HomeContext";
import { transform } from "typescript";

interface iItem {
  id: number;
  title: string;
  author: string;
  body: string;
  createDate: string;
}

const sortHeadStyled = {
  display: "flex",
  alignItems: "center",
  justifyContent: "spaceBetween",
};

const Table: React.FC<any> = ({ items }) => {
  const { setAscSort, ascSort } = useContext(HomeContext);

  return (
    <TableComponent>
      <thead>
        <tr>
          <TableHead width={"10%"} scope="col" centralized>
            POST ID
          </TableHead>
          <TableHead
            width={"15%"}
            scope="col"
            onClick={() => setAscSort(!ascSort)}
          >
            <span>TITLE</span>
            <img
              src={arrowDown}
              alt="sort"
              style={
                ascSort
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(00deg)" }
              }
            />
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
