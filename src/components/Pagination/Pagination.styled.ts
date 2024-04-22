import Button from "@components/Button/Button";
import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  font-display: row;
  gap: var(--s-1);
`;

export const BaseButton = styled(Button)`
  padding: var(--s-2) var(--s-3);
  border-radius: var(--s-1);
`;

export interface INumberButtonProps {
  $active?: boolean;
}
export const NumberButton = styled(BaseButton)<INumberButtonProps>`
  min-width: 48px;
  background-color: ${({ $active }) =>
    $active ? "var(--c-gray-3)" : "var(--c-white-1)"};
  color: ${({ $active }) => ($active ? "var(--c-white-1)" : "var(--c-gray)")};
`;

export interface IArrowButtonProps {
  disabled?: boolean;
}
export const ArrowButton = styled(BaseButton)`
  background-color: var(--c-white);
  display: flex;
`;
export const ArrowButtonIcon = styled.img<IArrowButtonProps>`
  width: 16px;
  height: 16px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const ShowMoreButton = styled(BaseButton)`
  background-color: var(--c-white);
  color: var(--c-gray);
`;

export const PageIndicator = styled.div`
  color: var(--c-gray);
`;
