import styled from "styled-components";

export const InputSearch = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 7.5px 16px;
  max-width: 620px;
  width: 100%;
  font-size: 16px;

`;
