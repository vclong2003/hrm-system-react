import * as S from "./ContractManager.styled";
import Table from "@components/Table/Table";
import { IContract } from "@interfaces/contract";
import { AppDispatch, RootState } from "@store/index";
import Column from "antd/es/table/Column";
import { useDispatch, useSelector } from "react-redux";

import Download from "@assets/icons/download.png";
import Trash from "@assets/icons/trash.png";
import { saveAs } from "file-saver";
import { saveContract } from "@store/employee";

interface IContractTableProps {
  loading?: boolean;
}
export default function ContractTable({ loading }: IContractTableProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { employee } = useSelector((state: RootState) => state.employeeState);

  const onDownload = (contract: IContract) => saveAs(contract.document);
  const onDelete = (contract: IContract) => {
    dispatch(
      saveContract({
        employee_id: contract.employee_id,
        "deleted_contracts[]": contract.id,
      })
    );
  };

  return (
    <Table
      dataSource={employee?.contracts}
      pagination={false}
      rowKey={"id"}
      loading={loading}>
      <Column title="No" render={(_, __, index) => index + 1} />
      <Column title="Contract Name" dataIndex="name" />
      <Column title="Sign Date" dataIndex="contract_date" />
      <Column
        title="Actions"
        render={(_, rowData: IContract) => (
          <S.ActionButtons>
            <S.DownloadBtn type="button" onClick={() => onDownload(rowData)}>
              <S.BtnIcon src={Download} />
            </S.DownloadBtn>
            <S.RemoveBtn type="button" onClick={() => onDelete(rowData)}>
              <S.BtnIcon src={Trash} />
            </S.RemoveBtn>
          </S.ActionButtons>
        )}
      />
    </Table>
  );
}
