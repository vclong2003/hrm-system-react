import * as S from "./DocumentManager.styled";
import { Col } from "antd";
import Typo from "@components/Typo/Typo";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { updateEmployeeDocuments } from "@store/employee";
import Table from "@components/Table/Table";
import Column from "antd/es/table/Column";
import helper from "@helpers/employeeManagement/documentManager";
import dateUtil from "@utils/date";
import { IEmployeeDocument } from "@interfaces/employeeDocument";
import { saveAs } from "file-saver";

import Download from "@assets/icons/download.png";
import Trash from "@assets/icons/trash.png";
import { useState } from "react";

export default function DocumentManager() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { employee } = useSelector((state: RootState) => state.employeeState);
  if (!employee) return null;

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    dispatch(
      updateEmployeeDocuments({
        employee_id: employee.id,
        "documents[]": [file],
      })
    ).then(() => setLoading(false));
  };
  const onDocumentDownload = (document: IEmployeeDocument) => {
    saveAs(document.document);
  };
  const onDeleteDocument = (document: IEmployeeDocument) => {
    dispatch(
      updateEmployeeDocuments({
        employee_id: employee.id,
        "deleted_ids[]": [document.id],
      })
    );
  };

  return (
    <S.DocumentManager>
      <Col span={12}>
        <S.FormGroup>
          <S.LabelCol span={8}>
            <Typo variant="body1">Document :</Typo>
          </S.LabelCol>
          <Col span={16}>
            {/* File input ------------------------------------------ */}
            <S.UploadBtn $loading={loading}>
              <label>
                <input
                  hidden
                  type="file"
                  onChange={onFileSelect}
                  accept="image/*,.pdf,.csv,.xlsx,.docx"
                  disabled={loading}
                />
                <Typo variant="body1">
                  {loading ? "Uploading..." : "Upload"}
                </Typo>
              </label>
            </S.UploadBtn>
          </Col>
        </S.FormGroup>
      </Col>
      <S.TableContainer span={24}>
        <Table
          pagination={false}
          dataSource={employee.documents}
          rowKey={"id"}
          loading={loading}>
          <Column title="No" render={(_, __, index) => index + 1} />
          <Column
            title="Document Name"
            dataIndex="document"
            render={(value) => helper.getDocumentName(value)}
          />
          <Column
            title="Created At"
            dataIndex="created_at"
            render={(value) => dateUtil.toISODateString(value)}
          />
          {/* Action Buttons ------------------------------------------------ */}
          <Column
            title="Action"
            render={(_, rowData: IEmployeeDocument) => (
              <S.ActionButtons>
                <S.DownloadBtn
                  type="button"
                  onClick={() => onDocumentDownload(rowData)}>
                  <S.BtnIcon src={Download} />
                </S.DownloadBtn>
                <S.RemoveBtn
                  type="button"
                  onClick={() => onDeleteDocument(rowData)}>
                  <S.BtnIcon src={Trash} />
                </S.RemoveBtn>
              </S.ActionButtons>
            )}
          />
        </Table>
      </S.TableContainer>
    </S.DocumentManager>
  );
}
