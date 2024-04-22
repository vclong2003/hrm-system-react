import * as S from "./EmployeeList.styled.ts";
import PageHeading from "../PageHeading/PageHeading.tsx";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index.ts";
import { Key, useEffect, useState } from "react";
import { getEmployeeList } from "@store/employee.ts";
import { Table, TableColumnsType } from "antd";
import { IEmployeeListItem } from "@interfaces/employee.ts";
import { EGender } from "src/enums/employee.ts";

interface IData extends IEmployeeListItem {
  key: Key;
  gender_name: string;
}

const columns: TableColumnsType<IData> = [
  {
    title: "Gender",
    dataIndex: "gender_name",
  },
  {
    title: "NIK",
    dataIndex: "staff_id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Card Number",
    dataIndex: "card_number",
  },
  {
    title: "Department",
    dataIndex: "department_name",
  },
  { title: "salary", dataIndex: "basic_salary" },
  {
    title: "Position",
    dataIndex: "position_name",
  },
];

const santinizeData = (data: IEmployeeListItem[]): IData[] => {
  return data.map((item) => {
    return {
      ...item,
      gender_name: EGender[item.gender],
      key: item.id,
    };
  });
};

export default function EmployeeList() {
  const dispatch = useDispatch<AppDispatch>();
  const { employees, last_page } = useSelector(
    (state: RootState) => state.employeeState
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  useEffect(() => {
    dispatch(getEmployeeList({ page: 1 }));
  }, [dispatch]);

  console.log(selectedRowKeys);

  return (
    <S.EmployeeList>
      <Breadcrumb
        items={[
          { title: "General" },
          {
            title: "Employee Management",
          },
        ]}
      />
      <PageHeading variant="search" />
      <S.TableContainer>
        <Table
          pagination={false}
          rowSelection={{
            selectedRowKeys,
            onChange: (keys) => setSelectedRowKeys(keys),
          }}
          columns={columns}
          dataSource={santinizeData(employees)}
        />
      </S.TableContainer>
    </S.EmployeeList>
  );
}
