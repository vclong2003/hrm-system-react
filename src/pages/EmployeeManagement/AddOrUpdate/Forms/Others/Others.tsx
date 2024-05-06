import * as S from "./Others.styled";

import BenefitsSelector from "./BenefitsSelector/BenefitsSelector";
import DocumentManager from "../../DocumentManager/DocumentManager";
import Typo from "@components/Typo/Typo";
import { Col, Select as AntdSelect } from "antd";
import { Select, TextArea } from "@components/formComponents";

import { useFormikContext } from "formik";

import { ICreateEmployeePayload } from "@interfaces/employee";
import { IGrade } from "@interfaces/grade";
import { IBenefit } from "@interfaces/benefit";

interface IOthersProps {
  grades: IGrade[];
  benefits: IBenefit[];
}
export default function Others({ grades, benefits }: IOthersProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  return (
    <S.Others>
      <Col span={12}>
        {/* Grade ------------------------------------ */}
        <S.FormGroup>
          <S.LabelCol span={8}>
            <Typo variant="body1">Grade</Typo>
          </S.LabelCol>
          <Col span={16}>
            <Select name="grade_id" error={errors.grade_id}>
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
          <Col span={16}>
            <BenefitsSelector name="benefits" availableBenefits={benefits} />
          </Col>
        </S.FormGroup>
        {/* Remark ------------------------------------- */}
        <S.FormGroup>
          <Col span={8}>
            <Typo variant="body1">Remark</Typo>
          </Col>
          <Col span={16}>
            <TextArea
              name="remark"
              error={errors.remark}
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Col>
        </S.FormGroup>
      </Col>
      {/* Document Manager -------------------------------------------------- */}
      <Col span={24}>
        <DocumentManager />
      </Col>
    </S.Others>
  );
}
