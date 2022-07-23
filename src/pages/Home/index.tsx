import React, { useEffect, useContext, useState } from "react";
import { Container } from "../../assets/styles/generalStyles";
import { HomeComponent, SearchContainer } from "./styles";

import Search from "../../components/Search";
import ListView from "../../components/ListView";
import SearchButton from "../../components/SearchButton";
import ClearButton from "../../components/ClearButton";
import Pagination from "../../components/Pagination";

import { HomeContext } from "../../context/HomeContext";

import Table from "../../components/Table";
import Grid from "../../components/Grid";
// interface IHomeContext {
//   id: number;
//   title: string;
// }
import ReactPaginate from "react-paginate";

const Home: React.FC = () => {
  const { loadHome, filtered, viewType } = useContext(HomeContext);

  const load = async () => {
    loadHome();
  };

  useEffect(() => {
    load();
  }, []);

  const itemsPerPage: number = 10;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(filtered.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filtered.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filtered.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  console.log(currentItems);

  return (
    <Container>
      <HomeComponent>
        <SearchContainer>
          <Search />
          <ListView />
          <SearchButton />
          <ClearButton />
        </SearchContainer>

        {currentItems?.length > 0 ? (
          <>
            {viewType === "list" && <Table items={currentItems} />}
            {/* {viewType === "grid" && <Grid items={currentItems} />} */}
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              // renderOnZeroPageCount={null}
            />
          </>
        ) : (
          <p>:( No items to show</p>
        )}
        {/* {homeData.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))} */}
      </HomeComponent>
    </Container>
  );
};

export default Home;
