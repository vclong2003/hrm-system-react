import { Col, Select as AntdSelect } from "antd";
import * as S from "./EmploymentDetails.styled";
import Typo from "@components/Typo/Typo";
import { Select } from "@components/formComponents";
import { EShift } from "src/enums/employee";
import { useFormikContext } from "formik";
import { ICreateEmployeePayload } from "@interfaces/employee";
import Checkbox from "@components/formComponents/Checkbox/Checkbox";

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
        {/* Checkboxes ------------------------------- */}
        <S.FormGroup>
          <Checkbox name="entitle_ot">Entitle OT</Checkbox>
        </S.FormGroup>
        <S.FormGroup>
          <Checkbox name="meal_allowance_paid">Meal Allowance Paid</Checkbox>
        </S.FormGroup>
        <S.FormGroup>
          <Checkbox name="operational_allowance_paid">
            Operational Allowance Paid
          </Checkbox>
        </S.FormGroup>
        <S.FormGroup>
          <Checkbox name="attendance_allowance_paid">
            Attendance Allowance Paid
          </Checkbox>
        </S.FormGroup>
        <S.FormGroup>
          <Checkbox name="hidden_on_payroll">Hidden on Payroll</Checkbox>
        </S.FormGroup>
      </Col>
    </S.EmploymentDetails>
  );
}
