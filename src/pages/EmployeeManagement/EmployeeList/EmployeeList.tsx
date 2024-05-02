import * as S from "./EmployeeList.styled.ts";

import Add from "@assets/icons/add.png";
import Trash from "@assets/icons/trash.png";
import PageHeading from "../PageHeading/PageHeading.tsx";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb.tsx";
import Table from "@components/Table/Table.tsx";

import { useDispatch, useSelector } from "react-redux";
import { Key, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployeeList } from "@store/employee.ts";

import { IEmployeeListItem } from "@interfaces/employee.ts";
import { EGender } from "src/enums/employee.ts";
import { AppDispatch, RootState } from "@store/index.ts";
import { COLUMNS } from "@variables/employeeManagement/employeeListColumns.ts";
import { list } from "@variables/employeeManagement/breadcrumbs.ts";
import { Pagination } from "antd";

const santinizeData = (data: IEmployeeListItem[]) => {
  return data.map((item) => {
    return {
      ...item,
      gender_name: EGender[item.gender],
    };
  });
};

export default function EmployeeList() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { employees, per_page, total } = useSelector(
    (state: RootState) => state.employeeState
  );
  const [page, setPage] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  useEffect(() => {
    dispatch(getEmployeeList({ page }));
  }, [dispatch, page]);

  const onNavigate = (employeeId: number) => {
    return navigate(`add-or-update/${employeeId}`);
  };

  return (
    <S.EmployeeList>
      <Breadcrumb items={list} />
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
          rowKey={"id"}
          rowSelection={{
            selectedRowKeys,
            onChange: (keys) => setSelectedRowKeys(keys),
          }}
          columns={COLUMNS}
          dataSource={santinizeData(employees)}
          onRow={(rowData) => {
            return {
              onDoubleClick: () => onNavigate(rowData.id),
            };
          }}
        />
        <S.Divider />
        <Pagination
          current={page}
          total={total}
          pageSize={per_page}
          onChange={setPage}
          showSizeChanger={false}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
        />
      </S.TableContainer>
    </S.EmployeeList>
  );
}
