import Button from "@components/Button/Button";
import Typo from "@components/Typo/Typo";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserActionsMenu = styled.div`
  width: 300px;
  padding: var(--s-1) var(--s-2);
`;

export const UserInfo = styled.div`
  display: flex;
  gap: var(--s-2);
  align-items: center;
  margin-bottom: var(--s-5);
`;
export const Username = styled(Typo)`
  color: var(--c-black);
`;

export const LogoutBtn = styled(Button)`
  width: 100%;
  margin-bottom: var(--s-2);
`;

export const ResetPasswordBtn = styled(Link)`
  text-decoration: none;
  color: var(--c-blue);
  font-size: var(--fs-body2);
`;
