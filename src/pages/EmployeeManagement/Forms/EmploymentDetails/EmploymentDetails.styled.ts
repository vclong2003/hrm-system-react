import { Col, Row } from "antd";
import styled from "styled-components";

interface IEmploymentDetailsProps {
  $show?: boolean;
}
export const EmploymentDetails = styled(Row)<IEmploymentDetailsProps>`
  display: ${({ $show }) => ($show ? "flex" : "none")};
`;

export const FormGroup = styled(Row)`
  margin-bottom: var(--s-3);
  padding: 0 var(--s-5);
`;

export const LabelCol = styled(Col)`
  display: flex;
  align-items: center;
`;
