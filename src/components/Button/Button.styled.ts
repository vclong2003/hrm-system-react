import styled from "styled-components";

interface IButtonProps {
  size?: "large" | "medium";
  disabled?: boolean;
  $loading?: boolean;
}

export const Button = styled.button<IButtonProps>`
  padding: ${({ size }) =>
    size === "large" ? "var(--s-3) var(--s-6)" : "var(--s-2) var(--s-4)"};
  background-color: var(--c-blue);
  color: var(--c-white);
  border-radius: var(--br-1);
  font-size: ${({ size }) =>
    size === "large" ? "var(--fs-body1)" : "var(--fs-body2)"};
  cursor: pointer;
  opacity: ${({ disabled, $loading }) => (disabled || $loading ? 0.5 : 1)};
`;
