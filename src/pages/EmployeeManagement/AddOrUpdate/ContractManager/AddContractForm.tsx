import { Formik } from "formik";
import * as S from "./ContractManager.styled";
import Typo from "@components/Typo/Typo";
import { Col } from "antd";
import DatePicker from "@components/formComponents/DatePicker/DatePicker";
import { Input } from "@components/formComponents";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { saveContract } from "@store/employee";
import { useState } from "react";

interface IFormValues {
  date: string;
  name: string;
  file: File | null | undefined;
}
const initialValues: IFormValues = {
  date: "",
  name: "",
  file: null,
};

export default function AddContractForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { employee } = useSelector((state: RootState) => state.employeeState);

  const [loading, setLoading] = useState(false);

  const onSubmit = (values: IFormValues) => {
    if (!employee) return;
    if (!values.file) return;
    if (loading) return;
    setLoading(true);
    dispatch(
      saveContract({
        employee_id: employee.id,
        "contract_dates[]": values.date,
        "names[]": values.name,
        "documents[]": values.file,
        "modified_contracts[]": "",
      })
    ).then(() => setLoading(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}>
      {({ setFieldValue, submitForm }) => (
        <>
          <S.FormGroup>
            <S.LabelCol span={10}>
              <Typo variant="body1">Contract Date</Typo>
            </S.LabelCol>
            <Col span={14}>
              <DatePicker name="date" />
            </Col>
          </S.FormGroup>
          <S.FormGroup>
            <S.LabelCol span={10}>
              <Typo variant="body1">Contract Name</Typo>
            </S.LabelCol>
            <Col span={14}>
              <Input name="name" />
            </Col>
          </S.FormGroup>
          <S.ButtonGroup>
            <S.UploadBtn>
              <label>
                <input
                  hidden
                  type="file"
                  accept="image/*,.pdf,.csv,.xlsx,.docx"
                  onChange={(e) => setFieldValue("file", e.target.files?.[0])}
                />
                <Typo variant="body1">Upload</Typo>
              </label>
            </S.UploadBtn>
            <S.SaveButton
              size="large"
              type="button"
              disabled={loading}
              onClick={submitForm}>
              {loading ? "Saving..." : "Save"}
            </S.SaveButton>
          </S.ButtonGroup>
        </>
      )}
    </Formik>
  );
}
