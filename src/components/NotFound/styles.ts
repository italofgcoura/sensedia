import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  img {
    width: 250px;
  }
  p {
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: bold;
    font-size: 44px;
  }
`;
