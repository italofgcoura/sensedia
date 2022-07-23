import React, { useContext } from "react";

import eyeglass from "../../assets/images/eyeglass.svg";

import { Button } from "./styles";

import { HomeContext } from "../../context/HomeContext";

const SearchButton: React.FC = () => {
  const { filter, parameter } = useContext(HomeContext);

  return (
    <Button onClick={filter} disabled={!parameter}>
      <img src={eyeglass} alt=" " />
      <span>search</span>
    </Button>
  );
};

export default SearchButton;
