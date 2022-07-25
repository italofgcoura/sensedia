import React, { useEffect, useContext } from "react";
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

const Home: React.FC = () => {
  const { loadHome, currentItems, filtered, viewType, loading } = useContext(
    HomeContext
  );

  const load = async () => {
    loadHome();
  };

  useEffect(() => {
    load();
  }, []);
  console.log(loading);
  if (loading) return <p>loading...</p>;
  return (
    <Container>
      <HomeComponent>
        <SearchContainer>
          <Search />
          <ListView />
          <SearchButton />
          <ClearButton />
        </SearchContainer>

        {filtered?.length > 0 ? (
          <>
            {currentItems?.length > 0 && (
              <>
                {viewType === "list" && <Table items={currentItems} />}
                {viewType === "grid" && <Grid items={currentItems} />}
              </>
            )}
            <Pagination />
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
