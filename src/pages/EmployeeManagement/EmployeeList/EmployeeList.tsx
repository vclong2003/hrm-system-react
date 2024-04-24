import * as S from "./EmployeeList.styled.ts";

import Add from "@assets/icons/add.png";
import Trash from "@assets/icons/trash.png";
import PageHeading from "../PageHeading/PageHeading.tsx";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb.tsx";
import { Table } from "antd";
import Pagination from "@components/Pagination/Pagination.tsx";

import { useDispatch, useSelector } from "react-redux";
import { Key, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployeeList } from "@store/employee.ts";

import { IEmployeeListItem } from "@interfaces/employee.ts";
import { EGender } from "src/enums/employee.ts";
import { AppDispatch, RootState } from "@store/index.ts";
import { COLUMNS } from "@variables/employeeManagement/employeeListColumns.ts";
import { employeeList } from "@variables/employeeManagement/breadcrumbs.ts";

const santinizeData = (data: IEmployeeListItem[]) => {
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
  const { employees } = useSelector((state: RootState) => state.employeeState);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  useEffect(() => {
    dispatch(getEmployeeList({ page: 1 }));
  }, [dispatch]);

  const handleNavigate = (employeeId: number) => {
    return navigate(`add-or-update/${employeeId}`);
  };

  return (
    <S.EmployeeList>
      <Breadcrumb items={employeeList} />
      <PageHeading variant="search" />
      <S.TableContainer>
        <S.BtnsContainer>
          <S.AddBtn onClick={() => navigate("add-or-update")}>
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
          columns={COLUMNS}
          dataSource={santinizeData(employees)}
          onRow={(record) => {
            return {
              onDoubleClick: () => handleNavigate(Number(record.key)),
            };
          }}
        />
        <S.Divider />
        <Pagination />
      </S.TableContainer>
    </S.EmployeeList>
  );
}
