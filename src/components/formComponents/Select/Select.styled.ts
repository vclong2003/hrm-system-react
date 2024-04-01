import { Select as BaseSelect } from "antd";
import styled from "styled-components";

export const Select = styled(BaseSelect)`
  width: 100%;
  & .ant-select-selector {
    padding: var(--s-2);

    font-size: var(--fs-body1);
    color: var(--c-black);
    font-family: var(--f-regular);

    background-color: var(--c-gray-1) !important;
    border: none !important;
    border-radius: var(--br-1);
  }
`;
