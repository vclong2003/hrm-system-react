import Typo from "@components/Typo/Typo";
import styled from "styled-components";

interface IDrawerItemProps {
  $isActive?: boolean;
}

export const DrawerItem = styled.div<IDrawerItemProps>`
  display: flex;
  font-display: row;
  padding: var(--s-2) var(--s-3);
  margin-bottom: var(--s-3);
  border-radius: var(--br-2);
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--c-white-1)" : "transparent"};
`;

export const Icon = styled.div`
  background-color: var(--c-white);
  padding: var(--s-2);
  margin-right: var(--s-3);
  border-radius: 50%;
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const Text = styled(Typo)`
  color: var(--c-black);
`;
