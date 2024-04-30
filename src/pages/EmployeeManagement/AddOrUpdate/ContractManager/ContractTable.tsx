import Table from "@components/Table/Table";
import { IContract } from "@interfaces/contract";
import { AppDispatch, RootState } from "@store/index";
import Column from "antd/es/table/Column";
import { useDispatch, useSelector } from "react-redux";

export default function ContractTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { employee } = useSelector((state: RootState) => state.employeeState);

  const onDownload = (contract: IContract) => {};
  const onDelete = (contract: IContract) => {};

  return (
    <Table dataSource={employee?.contracts} pagination={false} rowKey={"id"}>
      <Column title="No" render={(_, __, index) => index + 1} />
      <Column title="Contract Name" dataIndex="name" />
      <Column title="Sign Date" dataIndex="contract_date" />
    </Table>
  );
}
