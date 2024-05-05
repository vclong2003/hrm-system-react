import Typo from "@components/Typo/Typo";
import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: var(--box-shadow);
  padding: var(--s-3) var(--s-8);
  background-color: var(--c-white);
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-3);
`;

export const LogoImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const LogoText = styled(Typo)``;

export const Divider = styled.div`
  flex: 1;
`;
