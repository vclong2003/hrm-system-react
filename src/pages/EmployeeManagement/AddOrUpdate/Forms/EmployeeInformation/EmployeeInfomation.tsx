import * as S from "./EmployeeInformation.styled";

import Typo from "@components/Typo/Typo";
import { DatePicker, Input, Select } from "@components/formComponents";
import { Select as AntSelect } from "antd";
import { Col } from "antd";

import { useFormikContext } from "formik";
import { useSelector } from "react-redux";

import { ICreateEmployeePayload } from "@interfaces/employee";
import { IMarriage } from "@interfaces/marriage";
import { EGender } from "src/enums/employee";
import { RootState } from "@store/index";

interface IEmployeeInformationProps {
  marriages: IMarriage[];
}
export default function EmployeeInformation({
  marriages,
}: IEmployeeInformationProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();
  const { employee } = useSelector((state: RootState) => state.employeeState);

  return (
    <S.EmployeeInformation>
      <Col span={12}>
        {/* NIK ------------------------------------------------------ */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">NIK:</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input disabled value={employee?.staff_id || "Not Generated Yet"} />
          </Col>
        </S.FormGroup>
        {/* Name ------------------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Name:</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="name" error={errors.name} />
          </Col>
        </S.FormGroup>
        {/* Gender ------------------------------------------------------ */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Gender:</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Select name="gender" error={errors.gender}>
              <AntSelect.Option value={EGender.Male}>Male</AntSelect.Option>
              <AntSelect.Option value={EGender.Female}>Female</AntSelect.Option>
            </Select>
          </Col>
        </S.FormGroup>
        {/* Mother Name ------------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Mother Name:</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="mother_name" error={errors.mother_name} />
          </Col>
        </S.FormGroup>
        {/* Date of birth ----------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Date of birth:</Typo>
          </S.LabelCol>
          <Col span={15}>
            <DatePicker name="dob" error={errors.dob} />
          </Col>
        </S.FormGroup>
        {/* Place Of birth ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Place Of birth:</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input
              name="pob"
              error={errors.pob}
              placeholder="-auto change to upper case-"
            />
          </Col>
        </S.FormGroup>
        {/* KTP No. ---------------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">KTP No. :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="ktp_no" error={errors.ktp_no} />
          </Col>
        </S.FormGroup>
        {/* National Card ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">National Card :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="nc_id" error={errors.nc_id} />
          </Col>
        </S.FormGroup>
        {/* Home Address I ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Home Address I :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="home_address_1" error={errors.home_address_1} />
          </Col>
        </S.FormGroup>
        {/* Home Address 2 ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Home Address 2:</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="home_address_2" error={errors.home_address_2} />
          </Col>
        </S.FormGroup>
      </Col>
      <Col span={12}>
        {/* Mobile NO -------------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Mobile NO. :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="mobile_no" error={errors.mobile_no} />
          </Col>
        </S.FormGroup>
        {/* Tel No. ---------------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Tel No. :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="tel_no" error={errors.tel_no} />
          </Col>
        </S.FormGroup>
        {/* Marriage Status -------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Marriage Status :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Select name="marriage_id">
              {marriages.map((marriage) => (
                <AntSelect.Option key={marriage.id} value={marriage.id}>
                  {marriage.name}
                </AntSelect.Option>
              ))}
            </Select>
          </Col>
        </S.FormGroup>
        {/* Bank Card NO. ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Bank Card NO.:</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="card_number" error={errors.card_number} />
          </Col>
        </S.FormGroup>
        {/* Bank Account No. ------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Bank Account No. :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="bank_account_no" error={errors.bank_account_no} />
          </Col>
        </S.FormGroup>
        {/* Bank Name ------------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Bank Name :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="bank_name" error={errors.bank_name} />
          </Col>
        </S.FormGroup>
        {/* Family Card Number ----------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Family Card Number :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input
              name="family_card_number"
              error={errors.family_card_number}
            />
          </Col>
        </S.FormGroup>
        {/* Safety Insurance NO. --------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Safety Insurance NO. :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input
              name="safety_insurance_no"
              error={errors.safety_insurance_no}
            />
          </Col>
        </S.FormGroup>
        {/* Health Insurance No. --------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Health Insurance No. :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input
              name="health_insurance_no"
              error={errors.health_insurance_no}
            />
          </Col>
        </S.FormGroup>
      </Col>
    </S.EmployeeInformation>
  );
}
