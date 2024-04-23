import { Col, Select as AntdSelect } from "antd";
import * as S from "./EmploymentDetails.styled";
import Typo from "@components/Typo/Typo";
import { Select } from "@components/formComponents";
import { EShift } from "src/enums/employee";
import { useFormikContext } from "formik";
import { ICreateEmployeePayload } from "@interfaces/employee";

interface IEmploymentDetailsProps {
  show?: boolean;
}
export default function EmploymentDetails({ show }: IEmploymentDetailsProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  return (
    <S.EmploymentDetails $show={show}>
      <Col span={10}>
        {/* Department ---------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Department</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Select name="department_id"></Select>
          </Col>
        </S.FormGroup>
        {/* Position ------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Position</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Select name="position_id"></Select>
          </Col>
        </S.FormGroup>
        {/* Shift ----------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Shift</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Select name="shift">
              <AntdSelect.Option value={EShift.First}>1</AntdSelect.Option>
              <AntdSelect.Option value={EShift.Second}>2</AntdSelect.Option>
            </Select>
          </Col>
        </S.FormGroup>
      </Col>
    </S.EmploymentDetails>
  );
}
