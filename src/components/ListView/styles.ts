import styled from "styled-components";

export const DropDown = styled.select`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 7.5px 16px;
  max-width: 177px;
  width: 100%;
  font-size: 15.5px;
`;
