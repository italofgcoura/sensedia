import React from "react";

import sadFace from "../../assets/images/sentiment_dissatisfied_black_24dp.svg";

import { NotFoundContainer } from "./styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={sadFace} alt=":(" />
      <p>NO ITEMS TO SHOW</p>
    </NotFoundContainer>
  );
};

export default NotFound;
