import React, { useState, useEffect, useContext, useMemo } from "react";
import { Container } from "../../assets/styles/generalStyles";
import { HomeComponent, SearchContainer } from "./styles";

import Search from "../../components/Search";
import ListView from "../../components/ListView";
import SearchButton from "../../components/SearchButton";
import ClearButton from "../../components/ClearButton";

import { HomeContext } from "../../context/HomeContext";

import Table from "../../components/Table";
import Grid from "../../components/Grid";
// interface IHomeContext {
//   id: number;
//   title: string;
// }

const Home: React.FC = () => {
  const { loadHome, filtered, viewType } = useContext(HomeContext);

  const load = async () => {
    loadHome();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Container>
      <HomeComponent>
        <SearchContainer>
          <Search />
          <ListView />
          <SearchButton />
          <ClearButton />
        </SearchContainer>

        {filtered.length > 0 ? (
          <>
            {viewType === "list" && <Table />}
            {viewType === "grid" && <Grid />}
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
