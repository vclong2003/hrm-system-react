import { Select as BaseSelect } from "antd";
import styled from "styled-components";

export const Select = styled(BaseSelect)`
  width: 100%;
  height: calc(12px + 16px + 12px);
  .ant-select-selector {
    font-size: var(--fs-body1) !important;
    /* padding: var(--s-4) var(--s-2) !important; */
    color: var(--c-black);

    background-color: var(--c-white-1) !important;
    border: none !important;
    box-shadow: none !important;

    border-radius: var(--br-1);
  }
`;
