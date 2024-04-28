import Button from "@components/Button/Button";
import { Col, Row } from "antd";
import styled from "styled-components";

export const DocumentManager = styled(Row)`
  border-radius: var(--br-2);
  border: 1px solid var(--c-white-4);
  padding: var(--s-4) 0;
`;

export const FormGroup = styled(Row)`
  margin-bottom: var(--s-3);
  padding: 0 var(--s-5);
`;

export const LabelCol = styled(Col)`
  display: flex;
  align-items: center;
`;

export const UploadBtn = styled.div`
  background-color: var(--c-blue-1);
  padding: var(--s-1) var(--s-3);
  width: fit-content;
  border-radius: var(--br-1);
  border: 1px dashed var(--c-blue);
  color: var(--c-blue);
`;

export const TableContainer = styled(Col)`
  padding: 0 var(--s-5);
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--s-1);
`;

export const DownloadBtn = styled(Button)`
  padding: var(--s-1) var(--s-2);
  background-color: var(--c-green-1);
`;

export const RemoveBtn = styled(Button)`
  padding: var(--s-1) var(--s-2);
  background-color: var(--c-pink);
`;

export const BtnIcon = styled.img`
  width: 14px;
  height: 14px;
`;
