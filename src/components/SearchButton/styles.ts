import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 24px;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  border: none;
  transition: 0.3s;
  span {
    margin-left: 12px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: auto;
  }
`;
