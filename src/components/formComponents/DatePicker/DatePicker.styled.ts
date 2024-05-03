import Typo from "@components/Typo/Typo";
import { DatePicker as BaseDatePicker } from "antd";
import styled from "styled-components";

interface IDatePickerProps {
  $error?: boolean;
}
export const DatePicker = styled(BaseDatePicker)<IDatePickerProps>`
  height: calc(12px + 16px + 12px);
  border: ${({ $error }) => ($error ? "1px solid var(--c-pink-1)" : "none")};
  background-color: ${({ $error }) =>
    $error ? "var(--c-pink)" : "var(--c-white-1)"};
  input {
    font-size: var(--fs-body1) !important;
  }
`;

export const Error = styled(Typo)`
  color: var(--c-red);
`;
