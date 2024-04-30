import Button from "@components/Button/Button";
import Typo from "@components/Typo/Typo";
import { Col, Row } from "antd";
import styled from "styled-components";

export const ContractManager = styled(Row)`
  border-radius: var(--br-2);
  border: 1px solid var(--c-white-4);
  overflow: hidden;
`;

export const Title = styled(Typo)`
  width: 100%;
  padding: var(--s-1) var(--s-5);
  background-color: var(--c-white-1);
  color: var(--c-gray);
`;

export const SubTitle = styled(Typo)`
  width: 100%;
  padding: var(--s-3) var(--s-5);
  color: var(--c-gray);
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--c-white-4);
`;

export const ContentContainer = styled(Row)`
  width: 100%;
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

export const ButtonGroup = styled(FormGroup)`
  gap: var(--s-2);
  align-items: stretch;
`;

export const UploadBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--c-blue-1);
  padding: 0 var(--s-4);
  width: fit-content;
  border-radius: var(--br-1);
  border: 1px dashed var(--c-blue);
  color: var(--c-blue);
  flex: 1;
`;

export const SaveButton = styled(Button)`
  flex: 1;
  background-color: var(--c-green);
  color: var(--c-green-1);
`;

export const TableContainer = styled(Col)`
  border-left: 1px solid var(--c-white-4);
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
