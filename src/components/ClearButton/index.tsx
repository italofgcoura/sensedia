import React, { useContext } from "react";

import { Button } from "./styles";

import { HomeContext } from "../../context/HomeContext";

const ClearButton: React.FC = () => {
  const { handleClearParameter } = useContext(HomeContext);

  return (
    <Button
      onClick={() => {
        console.log('click')
        handleClearParameter();


      }}
    >
      clear
    </Button>
  );
};

export default ClearButton;
