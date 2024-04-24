import { ICreateEmployeePayload } from "@interfaces/employee";
import * as S from "./SalaryAndWages.styled";
import { useFormikContext } from "formik";
import { Col } from "antd";
import Typo from "@components/Typo/Typo";
import { Input } from "@components/formComponents";
import { useEffect } from "react";
import helpers from "@helpers/employeeManagement/form";

interface ISalaryAndWagesProps {
  setError: (isError: boolean) => void;
}
export default function SalaryAndWages({ setError }: ISalaryAndWagesProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  useEffect(() => {
    const isAnyError = helpers.checkErrors(errors, [
      "basic_salary",
      "audit_salary",
      "safety_insurance",
      "health_insurance",
    ]);
    setError(isAnyError);
  }, [errors]);

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
            <Input prefix={current} name="basic_salary" />
          </Col>
        </S.FormGroup>
        {/* Audit Salary -------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Basic Salary (Audit)</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Input prefix={current} name="audit_salary" />
          </Col>
        </S.FormGroup>
        {/* Safety Insurance ----------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Safety Insurance</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Input prefix={current} name="safety_insurance" />
          </Col>
        </S.FormGroup>
        {/* Health Insurance ----------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Health Insurance</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Input prefix={current} name="health_insurance" />
          </Col>
        </S.FormGroup>
      </Col>
    </S.SalaryAndWages>
  );
}
