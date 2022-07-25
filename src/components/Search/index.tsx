import React, { useContext } from "react";

import { InputSearch } from "./styles";

import { HomeContext } from "../../context/HomeContext";

const Search: React.FC = () => {
  const { handleChangeParameter, parameter, filtered } = useContext(HomeContext);

  return (
    <>
      <InputSearch
        placeholder="Type for search..."
        onChange={(e) => handleChangeParameter(e.target.value)}
        value={parameter}
        disabled={!filtered.length}
      />
    </>
  );
};

export default Search;
