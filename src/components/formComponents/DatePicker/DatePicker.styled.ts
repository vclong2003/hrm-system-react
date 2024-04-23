import { DatePicker as BaseDatePicker } from "antd";
import styled from "styled-components";

export const DatePicker = styled(BaseDatePicker)`
  height: calc(12px + 16px + 12px);
  border: none;
  background-color: var(--c-white-1);
  input {
    font-size: var(--fs-body1) !important;
  }
`;
