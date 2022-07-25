import React from "react";

import { Card } from "./styles";

import { Info } from "../InfoText";

interface Props {
  title: string;
  author: string;
  body: string;
  createDate: string;
}

const GridCard: React.FC<Props> = ({ title, author, body, createDate }) => {
  return (
    <Card>
      <Info bold marginBottom={"8px"}>
        {title}
      </Info>
      <Info marginBottom={"20px"}>{author}</Info>
      <Info marginBottom={"31px"}>{body}</Info>
      <Info>{createDate}</Info>
    </Card>
  );
};

export default GridCard;
