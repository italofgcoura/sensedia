import React, { useContext } from "react";

import { InputSearch } from "./styles";

import { HomeContext } from "../../context/HomeContext";

const Search: React.FC = () => {
  const { handleChangeParameter, parameter } = useContext(HomeContext);

  return (
    <>
      <InputSearch
        placeholder="Type for search..."
        onChange={(e) => handleChangeParameter(e.target.value)}
        value={parameter}
      />
    </>
  );
};

export default Search;
