import React, { useContext } from "react";

import { InputSearch, Form } from "./styles";

import { HomeContext } from "../../context/HomeContext";

const Search: React.FC = () => {
  const { handleChangeParameter, parameter, filtered, filter, homeData } = useContext(
    HomeContext
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    filter();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputSearch
        placeholder="Type for search..."
        onChange={(e) => handleChangeParameter(e.target.value)}
        value={parameter}
        disabled={!homeData.length && !parameter}
      />
    </Form>
  );
};

export default Search;
