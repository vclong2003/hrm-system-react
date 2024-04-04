import styled from "styled-components";
import Typo from "@components/Typo/Typo";

export const Drawer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: var(--s-8) var(--s-6);
`;

export const Title = styled(Typo)`
  color: var(--c-blue-2);
`;
