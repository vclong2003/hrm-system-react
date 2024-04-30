import { Col } from "antd";
import * as S from "./ContractManager.styled";
import AddContractForm from "./AddContractForm";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import ContractTable from "./ContractTable";

export default function ContractManager() {
  const { employee } = useSelector((state: RootState) => state.employeeState);
  if (!employee) return null;

  return (
    <S.ContractManager>
      <S.Title variant="body2" weight="medium">
        CONTRACT:
      </S.Title>
      <S.SubTitle variant="body2">
        Please upload pdf, png, xlsx, docx file format!
      </S.SubTitle>
      <S.HorizontalDivider />
      <S.ContentContainer>
        <Col span={10}>
          <AddContractForm />
        </Col>
        <S.TableContainer span={14}>
          <ContractTable />
        </S.TableContainer>
      </S.ContentContainer>
    </S.ContractManager>
  );
}
