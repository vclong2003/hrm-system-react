import Button from "@components/Button/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginForm = styled.div`
  max-width: 384px;
  width: 100%;
  background-color: var(--c-white);
  padding: var(--s-6);
  box-shadow: var(--box-shadow);
  border-radius: var(--br-3);
`;

export const LoginButton = styled(Button)`
  width: 100%;
`;

export const ForgotPasswordContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const ForgotPasswordLink = styled(Link)`
  text-decoration: none;
  font-size: var(--fs-body2);
  color: var(--c-blue-9);
  margin: 0;
`;
