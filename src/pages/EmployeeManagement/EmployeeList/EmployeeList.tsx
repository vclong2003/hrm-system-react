import * as S from "./EmployeeList.styled.ts";

import Add from "@assets/icons/add.png";
import Trash from "@assets/icons/trash.png";
import PageHeading from "../PageHeading/PageHeading.tsx";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb.tsx";
import Table from "@components/Table/Table.tsx";
import DeleteModal from "./DeleteModal.tsx";
import { Pagination } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { Key, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployeeList } from "@store/employee.ts";

import { IEmployeeListItem } from "@interfaces/employee.ts";
import { EGender } from "src/enums/employee.ts";
import { AppDispatch, RootState } from "@store/index.ts";
import { COLUMNS } from "@variables/employeeManagement/employeeListColumns.ts";
import { list } from "@variables/employeeManagement/breadcrumbs.ts";
import useDebounce from "@hooks/useDebounce.ts";
import useQueryParams from "@hooks/useQueryParams.ts";

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
  const { getParam, setParam } = useQueryParams<"page" | "search">();
  const dispatch = useDispatch<AppDispatch>();
  const { employees, per_page, total } = useSelector(
    (state: RootState) => state.employeeState
  );
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useDebounce<string>(
    getParam("search") || ""
  );
  const [page, setPage] = useState(Number(getParam("page")) || 1);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    setParam("search", searchValue);
    dispatch(getEmployeeList({ page, search: searchValue })).then(() =>
      setLoading(false)
    );
  }, [dispatch, page, searchValue]);

  useEffect(() => setParam("page", page.toString()), [page]);

  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);
  const onNavigate = (employeeId: number) => {
    navigate(`add-or-update/${employeeId}`);
  };

  return (
    <S.EmployeeList>
      {showDeleteModal && (
        <DeleteModal
          delete_ids={selectedRowKeys as number[]}
          onClose={closeDeleteModal}
        />
      )}
      <Breadcrumb items={list} />
      <PageHeading
        variant="search"
        initSearchValue={getParam("search") || ""}
        onSearch={setSearchValue}
      />
      <S.TableContainer>
        <S.BtnsContainer>
          <S.AddBtn onClick={() => navigate("add-or-update")}>
            <S.BtnIcon src={Add} />
            Add
          </S.AddBtn>
          <S.DeleteBtn
            disabled={selectedRowKeys.length === 0}
            onClick={openDeleteModal}>
            <S.BtnIcon src={Trash} />
            Delete
          </S.DeleteBtn>
        </S.BtnsContainer>
        <S.Divider />
        <Table
          loading={loading}
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
