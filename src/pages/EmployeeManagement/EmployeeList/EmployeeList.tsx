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

import Add from "@assets/icons/add.png";
import Trash from "@assets/icons/trash.png";
import Pagination from "@components/Pagination/Pagination.tsx";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { employees, last_page } = useSelector(
    (state: RootState) => state.employeeState
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  useEffect(() => {
    dispatch(getEmployeeList({ page: 1 }));
  }, [dispatch]);

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
        <S.BtnsContainer>
          <S.AddBtn onClick={() => navigate("add-or-create")}>
            <S.BtnIcon src={Add} />
            Add
          </S.AddBtn>
          <S.DeleteBtn>
            <S.BtnIcon src={Trash} />
            Delete
          </S.DeleteBtn>
        </S.BtnsContainer>
        <S.Divider />
        <Table
          pagination={false}
          rowSelection={{
            selectedRowKeys,
            onChange: (keys) => setSelectedRowKeys(keys),
          }}
          columns={columns}
          dataSource={santinizeData(employees)}
        />
        <S.Divider />
        <Pagination />
      </S.TableContainer>
    </S.EmployeeList>
  );
}
