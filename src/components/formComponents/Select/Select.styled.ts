import Typo from "@components/Typo/Typo";
import { Select as BaseSelect } from "antd";
import styled from "styled-components";

interface ISelectProps {
  $error?: boolean;
}
export const Select = styled(BaseSelect)<ISelectProps>`
  width: 100%;
  height: calc(12px + 16px + 12px);
  .ant-select-selector {
    font-size: var(--fs-body1) !important;
    /* padding: var(--s-4) var(--s-2) !important; */
    color: var(--c-black);

    background-color: ${({ $error }) =>
      $error ? "var(--c-pink)" : "var(--c-white-1)"} !important;
    border: ${({ $error }) =>
      $error ? "1px solid var(--c-pink-1)" : "none"} !important;
    box-shadow: none !important;

    border-radius: var(--br-1);
  }
`;

export const Error = styled(Typo)`
  color: var(--c-red);
`;
