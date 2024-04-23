import Typo from "@components/Typo/Typo";
import { Col, Row } from "antd";
import styled from "styled-components";

export const SalaryAndWages = styled(Row)``;

export const FormGroup = styled(Row)`
  margin-bottom: var(--s-3);
  padding: 0 var(--s-5);
`;

export const LabelCol = styled(Col)`
  display: flex;
  align-items: center;
`;

export const MoneyCurrent = styled(Typo)`
  color: var(--c-blue-2);
`;
