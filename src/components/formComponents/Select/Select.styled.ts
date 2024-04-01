import { Select as BaseSelect } from "antd";
import styled from "styled-components";

export const Select = styled(BaseSelect)`
  width: 100%;
  & .ant-select-selector {
    padding: var(--s-4) 0 !important;

    font-size: var(--fs-body1) !important;
    color: var(--c-black);
    font-family: var(--f-regular);

    background-color: var(--c-gray-1) !important;
    border: none !important;
    box-shadow: none !important;

    border-radius: var(--br-1);
  }

  & .ant-select-item-option-active {
    background-color: var(--c-green-1) !important;
    color: var(--c-green) !important;
  }
`;
