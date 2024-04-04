import Typo from "@components/Typo/Typo";
import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: var(--box-shadow);
`;

export const Logo = styled.div``;

export const LogoImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const LogoText = styled(Typo)``;

export const Divider = styled.div`
  flex: 1;
`;

export const LanguageSwitcher = styled.div``;

export const UserMenu = styled.div``;
