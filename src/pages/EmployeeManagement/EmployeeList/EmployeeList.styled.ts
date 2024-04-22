import Button from "@components/Button/Button";
import styled from "styled-components";

export const EmployeeList = styled.div``;

export const TableContainer = styled.div`
  padding: var(--s-3);
  background-color: var(--c-white-5);
  border-radius: var(--br-3);

  .ant-table-cell {
    padding: var(--s-2) !important;
    border: 2px solid var(--c-white) !important;
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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--c-white-4);
  margin: var(--s-3) 0;
`;

export const BtnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: var(--s-1);
`;

export const AddBtn = styled(Button)`
  background-color: var(--c-blue-1);
  color: var(--c-blue);
  display: flex;
  align-items: center;
`;

export const DeleteBtn = styled(Button)`
  background-color: var(--c-pink);
  color: var(--c-red);
  display: flex;
  align-items: center;
`;

export const BtnIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: var(--s-1);
`;
