import { DetailedHTMLProps } from "react";
import styled from "styled-components";

export type ButtonProps = {
  isPrimary?: boolean;
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const ButtonWrapper = styled.button<ButtonProps>`
  width: max-content;
  padding: 0.8rem 2.5rem;
  background: ${({ isPrimary }) =>
    isPrimary ? "linear-gradient(180deg, #F2C94C 0%, #F2994A 100%)" : "white"};
  border-radius: 10px;
  border: none;
  color: ${({ isPrimary, theme }) =>
    isPrimary ? "white" : theme.colors.purple};
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
