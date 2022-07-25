import styled from "styled-components";

export const Card = styled.div`
  padding: 16px;
  border-radius: ${({ theme }) => theme.spacing.radius};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  height: 280px;
`;
