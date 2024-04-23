import { Checkbox as BaseCheckbox } from "antd";
import styled from "styled-components";

export const Checkbox = styled(BaseCheckbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--c-green-5);
    border-color: var(--c-white-4);
  }
`;
