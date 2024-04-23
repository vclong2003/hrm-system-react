import { ICreateEmployeePayload } from "@interfaces/employee";
import * as S from "./SalaryAndWages.styled";
import { useFormikContext } from "formik";
import { Col } from "antd";
import Typo from "@components/Typo/Typo";
import { Input } from "@components/formComponents";
import { useEffect } from "react";

interface ISalaryAndWagesProps {
  show?: boolean;
  setError: (isError: boolean) => void;
}
export default function SalaryAndWages({
  show,
  setError,
}: ISalaryAndWagesProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  useEffect(() => {
    if (
      errors.basic_salary ||
      errors.audit_salary ||
      errors.safety_insurance ||
      errors.health_insurance
    ) {
      setError(true);
      return;
    }
    setError(false);
  }, [errors]);

  // Rp prefix for input
  const current = <S.MoneyCurrent variant="body1">Rp</S.MoneyCurrent>;

  return (
    <S.SalaryAndWages $show={show}>
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