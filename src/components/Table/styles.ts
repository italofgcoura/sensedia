import styled from "styled-components";

export const TableComponent = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  padding: 16px 0;
  border-collapse: collapse;
`;

interface TableHeadProps {
  width: string;
  bold?: boolean;
  centralized?: boolean;
}

export const TableHead = styled.th<TableHeadProps>`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  text-align: ${({ centralized }) => (centralized ? "center" : "left")};
  width: ${({ width }) => width};
  padding-left: 24px;
  padding: 16px 0;
  padding-left: 24px;
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const TableRow = styled.tr`
  width: 100%;
`;

export const TableData = styled.td<TableHeadProps>`
  padding-left: 24px;
  width: ${({ width }) => width};
  padding: 16px 0;
  padding-left: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
