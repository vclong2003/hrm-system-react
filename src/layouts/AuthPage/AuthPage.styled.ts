import Typo from "@components/Typo/Typo";
import styled from "styled-components";

export const AuthPage = styled.div`
  padding-top: var(--s-10);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-2);
  margin-bottom: var(--s-7);
`;

export const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

export const LogoText = styled(Typo)``;
