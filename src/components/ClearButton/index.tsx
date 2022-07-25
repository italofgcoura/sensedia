import React, { useContext } from "react";

import { Button } from "./styles";

import { HomeContext } from "../../context/HomeContext";

const ClearButton: React.FC = () => {
  const { handleClearParameter, filtered, parameter } = useContext(HomeContext);

  return (
    <Button
      onClick={() => {
        handleClearParameter();
      }}
      disabled={!filtered.length && !parameter}
    >
      clear
    </Button>
  );
};

export default ClearButton;
