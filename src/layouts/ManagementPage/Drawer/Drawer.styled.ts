import styled from "styled-components";
import Typo from "@components/Typo/Typo";

export const Drawer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: var(--s-6);
  margin-top: var(--s-1);
  background-color: var(--c-white-5);
`;

export const Title = styled(Typo)`
  color: var(--c-blue-2);
  margin-bottom: var(--s-3);
`;
