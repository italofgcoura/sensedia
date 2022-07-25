import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.main};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0 24px;
  transition: 0.3s;
  &:disabled {
    color: ${({ theme }) => theme.colors.lightGray};
    cursor: auto;
  }
`;
