import Button from "@components/Button/Button";
import { Row } from "antd";
import styled from "styled-components";

export const ChangePassword = styled.div``;

export const FormContainer = styled.div`
  background-color: var(--c-white-5);
  border-radius: var(--br-3);
  padding: var(--s-4);
  margin: var(--s-3) 0;
`;

export const Divider = styled.div`
  margin: var(--s-3) 0;
  width: 100%;
  height: 1px;
  background-color: var(--c-white-4);
`;

export const FormGroup = styled(Row)`
  margin-bottom: var(--s-2);
`;

export const SubmitBtn = styled(Button)`
  margin: var(--s-2) 0;
  width: 100%;
`;
