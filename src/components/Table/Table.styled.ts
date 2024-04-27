import { Table as BaseTable } from "antd";
import styled from "styled-components";

export const Table = styled(BaseTable)`
  .ant-table-cell {
    padding: var(--s-2) !important;
    border: 2px solid var(--c-white-5) !important;
    background-color: var(--c-white-2);
    font-family: var(--ff-regular);
    font-size: var(--fs-body2);
  }
  .ant-table-cell-row-hover {
    background-color: var(--c-blue-1) !important;
  }

  .ant-table-row-selected .ant-table-cell {
    background-color: var(--c-green-1) !important;
  }

  .ant-table-cell::before {
    content: unset !important;
  }

  .ant-table-thead .ant-table-cell {
    background-color: var(--c-white-6);
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner:after {
    background-color: var(--c-green);
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--c-green);
    border-color: var(--c-white);
  }
`;
