import Typo from "@components/Typo/Typo";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DrawerItem = styled(NavLink)`
  display: flex;
  font-display: row;
  align-items: center;
  padding: var(--s-2) var(--s-3);
  margin-bottom: var(--s-3);
  border-radius: var(--br-2);
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  &.active {
    background-color: var(--c-white-1);
  }
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
