import styled from "styled-components";

interface TableHeadProps {
  bold?: boolean;
  centralized?: boolean;
  marginBottom?: string;
}

export const Info = styled.p<TableHeadProps>`
  color: ${({ theme, bold }) =>
    bold ? theme.colors.black : theme.colors.gray};
  font-size: 16px;
  text-align: ${({ centralized }) => (centralized ? "center" : "left")};
  font-weight: ${({ bold }) => (bold ? "bold" : "400")};
  margin: 0;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0")};
`;
