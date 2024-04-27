import * as S from "./DocumentManager.styled";
import notiUtils from "@utils/notification";
import { Col } from "antd";
import Typo from "@components/Typo/Typo";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { updateEmployeeDocuments } from "@store/employee";

export default function DocumentManager() {
  const dispatch = useDispatch<AppDispatch>();
  const { employee } = useSelector((state: RootState) => state.employeeState);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!employee) return null;

  console.log(employee);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    dispatch(
      updateEmployeeDocuments({
        employee_id: employee.id,
        "documents[]": [file],
      })
    )
      .unwrap()
      .then(() => (fileInputRef.current!.value = ""))
      .then(() => notiUtils.notifySuccess("Document uploaded successfully!"));
  };

  return (
    <S.DocumentManager>
      <Col span={12}>
        <S.FormGroup>
          <S.LabelCol span={8}>
            <Typo variant="body1">Document :</Typo>
          </S.LabelCol>
          <Col span={16}>
            <S.UploadBtn>
              <input type="file" onChange={onFileSelect} ref={fileInputRef} />
              <Typo variant="body1">Upload</Typo>
            </S.UploadBtn>
          </Col>
        </S.FormGroup>
      </Col>
    </S.DocumentManager>
  );
}
