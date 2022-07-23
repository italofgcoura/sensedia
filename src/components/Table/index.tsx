import React, { useMemo, useContext } from "react";

import { useTable, Column } from "react-table";

import { HomeContext } from "../../context/HomeContext";

import { TableComponent, TableRow, TableHead, TableData } from "./styles";

import { Info } from "../InfoText";

const Table = () => {
  const { filtered } = useContext(HomeContext);

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
        {filtered.map((item) => (
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

  // const data = useMemo(() => homeData, [homeData]);

  // const columns: Column[] = React.useMemo(
  //   () => [
  //     {
  //       Header: "POSTID",
  //       accessor: "id", // accessor is the "key" in the data
  //     },
  //     {
  //       Header: "TITLE",
  //       accessor: "title",
  //     },
  //     {
  //       Header: "AUTHOR",
  //       accessor: "author",
  //     },
  //     {
  //       Header: "BODY",
  //       accessor: "body",
  //     },
  //     {
  //       Header: "CREATION DATE",
  //       accessor: "createDate",
  //     },
  //   ],
  //   []
  // );

  // const tableInstance = useTable({ columns, data });

  // const {
  //   getTableProps,

  //   getTableBodyProps,

  //   headerGroups,

  //   rows,

  //   prepareRow,
  // } = tableInstance;

  // return (
  //   // apply the table props

  //   <table {...getTableProps()}>
  //     <thead>
  //       {
  //         // Loop over the header rows

  //         headerGroups.map((headerGroup) => (
  //           // Apply the header row props

  //           <tr {...headerGroup.getHeaderGroupProps()}>
  //             {
  //               // Loop over the headers in each row

  //               headerGroup.headers.map((column) => (
  //                 // Apply the header cell props

  //                 <th {...column.getHeaderProps()}>
  //                   {
  //                     // Render the header
  //                     column.render("Header")
  //                   }
  //                 </th>
  //               ))
  //             }
  //           </tr>
  //         ))
  //       }
  //     </thead>

  //     {/* Apply the table body props */}

  //     <tbody {...getTableBodyProps()}>
  //       {
  //         // Loop over the table rows

  //         rows.map((row) => {
  //           // Prepare the row for display

  //           prepareRow(row);

  //           return (
  //             // Apply the row props

  //             <tr {...row.getRowProps()}>
  //               {
  //                 // Loop over the rows cells

  //                 row.cells.map((cell) => {
  //                   // Apply the cell props

  //                   return (
  //                     <td {...cell.getCellProps()}>
  //                       {
  //                         // Render the cell contents

  //                         cell.render("Cell")
  //                       }
  //                     </td>
  //                   );
  //                 })
  //               }
  //             </tr>
  //           );
  //         })
  //       }
  //     </tbody>
  //   </table>
  // );
};

export default Table;
