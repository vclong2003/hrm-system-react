import * as S from "./EmployeeList.styled.ts";

import Add from "@assets/icons/add.png";
import Trash from "@assets/icons/trash.png";

import PageHeading from "../PageHeading/PageHeading.tsx";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb.tsx";
import Table from "@components/Table/Table.tsx";
import DeleteModal from "./DeleteModal.tsx";
import { Pagination } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "@hooks/useDebounce.ts";
import useQueryParams from "@hooks/useQueryParams.ts";
import { getEmployeeList } from "@store/employee.ts";
import helper from "@helpers/employeeManagement/employeeList.ts";

import { Key } from "react";
import { AppDispatch, RootState } from "@store/index.ts";
import { COLUMNS } from "@variables/employeeManagement/employeeListColumns.ts";
import { list } from "@variables/employeeManagement/breadcrumbs.ts";

export default function EmployeeList() {
  const navigate = useNavigate();
  const { getParam, setParam } = useQueryParams<"page" | "search">();

  const dispatch = useDispatch<AppDispatch>();
  const { employees, per_page, total } = useSelector(
    (state: RootState) => state.employeeState
  );

  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [page, setPage] = useState(Number(getParam("page")) || 1);
  const [searchValue, setSearchValue] = useDebounce<string>(getParam("search"));

  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);
  const openEmployeeDetail = (id: number) => navigate(`add-or-update/${id}`);

  const fetchEmployees = () => {
    setLoading(true);
    dispatch(getEmployeeList({ page, search: searchValue }))
      .unwrap()
      .then(({ last_page }) => last_page < page && setPage(1))
      .finally(() => setLoading(false));
  };

  useEffect(() => fetchEmployees(), [dispatch, page, searchValue]);
  useEffect(() => setParam("search", searchValue), [searchValue]);
  useEffect(() => setParam("page", page.toString()), [page]);

  return (
    <S.EmployeeList>
      {/* Delete modal ----------------------------------------------- */}
      {showDeleteModal && (
        <DeleteModal
          delete_ids={selectedRowKeys as number[]}
          onClose={closeDeleteModal}
          onDeleted={fetchEmployees}
        />
      )}
      <Breadcrumb items={list} />
      {/* Page heading ----------------------------------------------- */}
      <PageHeading
        variant="search"
        initSearchValue={getParam("search")}
        onSearch={setSearchValue}
      />
      <S.TableContainer>
        {/* Table header buttons --------------------------- */}
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
        {/* Table ---------------------------------------------------- */}
        <Table
          loading={loading}
          pagination={false}
          rowKey={"id"}
          rowSelection={{
            selectedRowKeys,
            onChange: (keys) => setSelectedRowKeys(keys),
          }}
          columns={COLUMNS}
          dataSource={helper.santinizeEmployeesData(employees)}
          onRow={(rowData) => {
            return {
              onDoubleClick: () => openEmployeeDetail(rowData.id),
            };
          }}
        />
        <S.Divider />
        {/* Pagination ----------------------------------------------- */}
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
