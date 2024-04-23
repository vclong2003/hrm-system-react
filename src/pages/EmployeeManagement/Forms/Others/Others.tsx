import { Col, Select as AntdSelect } from "antd";
import * as S from "./Others.styled";
import Typo from "@components/Typo/Typo";
import { Select } from "@components/formComponents";
import { ICreateEmployeePayload } from "@interfaces/employee";
import { useFormikContext } from "formik";
import TextArea from "@components/formComponents/TextArea/TextArea";
import { useEffect } from "react";
import { IGrade } from "@interfaces/grade";

interface IOthersProps {
  grades: IGrade[];
  setError: (isError: boolean) => void;
}
export default function Others({ grades, setError }: IOthersProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  useEffect(() => {
    if (errors.grade_id || errors.remark) {
      setError(true);
      return;
    }
    setError(false);
  }, [errors]);

  return (
    <S.Others>
      <Col span={12}>
        {/* Grade ------------------------------------ */}
        <S.FormGroup>
          <S.LabelCol span={8}>
            <Typo variant="body1">Grade</Typo>
          </S.LabelCol>
          <Col span={16}>
            <Select name="grade_id">
              {grades.map((grade) => (
                <AntdSelect.Option key={grade.id} value={grade.id}>
                  {grade.name}
                </AntdSelect.Option>
              ))}
            </Select>
          </Col>
        </S.FormGroup>
        {/* Benefits ---------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={8}>
            <Typo variant="body1">Benefits</Typo>
          </S.LabelCol>
          <Col span={16}></Col>
        </S.FormGroup>
        {/* Remark ------------------------------------- */}
        <S.FormGroup>
          <Col span={8}>
            <Typo variant="body1">Remark</Typo>
          </Col>
          <Col span={16}>
            <TextArea name="remark" autoSize={{ minRows: 3, maxRows: 5 }} />
          </Col>
        </S.FormGroup>
      </Col>
    </S.Others>
  );
}
