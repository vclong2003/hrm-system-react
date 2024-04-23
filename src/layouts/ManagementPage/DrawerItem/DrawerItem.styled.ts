import Typo from "@components/Typo/Typo";
import styled from "styled-components";

interface IDrawerItemProps {
  $isActive?: boolean;
}

export const DrawerItem = styled.div<IDrawerItemProps>`
  display: flex;
  font-display: row;
  align-items: center;
  padding: var(--s-2) var(--s-3);
  margin-bottom: var(--s-3);
  border-radius: var(--br-2);
  cursor: pointer;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--c-white-1)" : "transparent"};
`;

export const Icon = styled.div`
  background-color: var(--c-white);
  margin-right: var(--s-3);
  display: flex;
  padding: var(--s-2);
  border-radius: 50%;
`;

export const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const Text = styled(Typo)`
  color: var(--c-black);
`;
