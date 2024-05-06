import * as S from "./SalaryAndWages.styled";

import Typo from "@components/Typo/Typo";
import { Input } from "@components/formComponents";
import { Col } from "antd";

import { useFormikContext } from "formik";

import { ICreateEmployeePayload } from "@interfaces/employee";

export default function SalaryAndWages() {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  // Rp prefix for input
  const current = <S.MoneyCurrent variant="body1">Rp</S.MoneyCurrent>;

  return (
    <S.SalaryAndWages>
      <Col span={12}>
        {/* Basic salary -------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Basic Salary</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Input
              prefix={current}
              name="basic_salary"
              error={errors.basic_salary}
            />
          </Col>
        </S.FormGroup>
        {/* Audit Salary -------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Basic Salary (Audit)</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Input
              prefix={current}
              name="audit_salary"
              error={errors.audit_salary}
            />
          </Col>
        </S.FormGroup>
        {/* Safety Insurance ----------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Safety Insurance</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Input
              prefix={current}
              name="safety_insurance"
              error={errors.safety_insurance}
            />
          </Col>
        </S.FormGroup>
        {/* Health Insurance ----------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Health Insurance</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Input
              prefix={current}
              name="health_insurance"
              error={errors.health_insurance}
            />
          </Col>
        </S.FormGroup>
      </Col>
    </S.SalaryAndWages>
  );
}
