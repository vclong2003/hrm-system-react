import Button from "@components/Button/Button";
import styled from "styled-components";

interface IItemProps {
  $isActive?: boolean;
}

export const Item = styled(Button)<IItemProps>`
  width: fit-content;
  padding: var(--s-2) var(--s-4);
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--c-blue)" : "var(--c-blue-3)"};
  color: ${({ $isActive }) => ($isActive ? "var(--c-white)" : "var(--c-blue)")};
`;
