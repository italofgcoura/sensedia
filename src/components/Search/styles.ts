import styled from "styled-components";

export const Form = styled.form`
  width: 620px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const InputSearch = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 7.5px 16px;
  width: 100%;
  font-size: 16px;
  transition: 0.3s;
  height: 100%;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
