import styled from "styled-components";

export const HomeComponent = styled.div`
  margin-top: 60px;
  padding-bottom: 44px;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 44px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 8px;
  }
`;
