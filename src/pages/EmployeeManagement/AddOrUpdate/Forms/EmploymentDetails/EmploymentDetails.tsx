import * as S from "./EmploymentDetails.styled";

import Typo from "@components/Typo/Typo";
import { Col, Select as AntdSelect } from "antd";
import { Checkbox, Select } from "@components/formComponents";

import { useFormikContext } from "formik";

import { ICreateEmployeePayload } from "@interfaces/employee";
import { IDepartment } from "@interfaces/department";
import { IPosition } from "@interfaces/position";
import { EShift } from "src/enums/employee";

interface IEmploymentDetailsProps {
  departments: IDepartment[];
  positions: IPosition[];
}
export default function EmploymentDetails({
  departments,
  positions,
}: IEmploymentDetailsProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  return (
    <S.EmploymentDetails>
      <Col span={10}>
        {/* Department ---------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Department</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Select name="department_id" error={errors.department_id}>
              {departments.map((department) => (
                <AntdSelect.Option key={department.id} value={department.id}>
                  {department.name}
                </AntdSelect.Option>
              ))}
            </Select>
          </Col>
        </S.FormGroup>
        {/* Position ------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Position</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Select name="position_id" error={errors.position_id}>
              {positions.map((position) => (
                <AntdSelect.Option key={position.id} value={position.id}>
                  {position.name}
                </AntdSelect.Option>
              ))}
            </Select>
          </Col>
        </S.FormGroup>
        {/* Shift ----------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Shift</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Select name="shift" error={errors.shift}>
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
      </Col>
    </S.EmploymentDetails>
  );
}
