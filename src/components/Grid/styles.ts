import styled from "styled-components";

export const GridComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 26px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
