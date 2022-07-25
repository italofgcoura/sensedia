import React, { useContext, useMemo, useState, useEffect } from "react";

import { HomeContext } from "../../context/HomeContext";

import ReactPaginate from "react-paginate";

import arrowLeft from "../../assets/images/keyboard_arrow_left_black_24dp.svg";

import arrowRight from "../../assets/images/keyboard_arrow_right_black_24dp.svg";

import "./styles.css";

const PrevLabel = () => {
  return <img src={arrowLeft} alt="" />;
};

const NextLabel = () => {
  return <img src={arrowRight} alt="" />;
};

export default function App() {
  const { filtered, setCurrentItems, viewType, setLoading } = useContext(
    HomeContext
  );

  const itemsPerPage: number = useMemo<number>(() => {
    if (viewType === "grid") return 8;
    return 10;
  }, [viewType]);

  // We start with an empty list of items.
  console.log("pagination", filtered);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filtered.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filtered.length / itemsPerPage));
    setLoading(false);
  }, [itemOffset, itemsPerPage, filtered]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filtered.length;

    setItemOffset(newOffset);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "right",
        marginTop: "24px",
      }}
    >
      <ReactPaginate
        breakLabel="..."
        nextLabel={<NextLabel />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<PrevLabel />}
        // renderOnZeroPageCount={null}
        activeClassName={"active"}
        containerClassName={"paginationContainer"}
        breakClassName={"paginationBreak"}
        breakLinkClassName={"paginationBreakLinkClassName"}
        pageClassName={"paginationPageClassName"}
      />
    </div>
  );
}
