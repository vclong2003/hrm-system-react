import * as S from "./EmployeeInformation.styled";
import Typo from "@components/Typo/Typo";
import { Input, Select } from "@components/formComponents";
import DatePicker from "@components/formComponents/DatePicker/DatePicker";
import { ICreateEmployeePayload } from "@interfaces/employee";
import { IMarriage } from "@interfaces/marriage";
import { Col } from "antd";
import { Select as AntSelect } from "antd";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { EGender } from "src/enums/employee";
import marriageService from "@services/marriage";

interface IEmployeeInformationProps {
  show?: boolean;
}
export default function EmployeeInformation({
  show,
}: IEmployeeInformationProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();
  const [marriages, setMarriages] = useState<IMarriage[]>([]);

  useEffect(() => {
    marriageService.getMarriageList({}).then((data) => setMarriages(data));
  }, []);

  console.log(marriages);

  return (
    <S.EmployeeInformation $show={show}>
      <Col span={12}>
        {/* NIK ------------------------------------------------------ */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">NIK :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input disabled />
          </Col>
        </S.FormGroup>
        {/* Name ------------------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Name* :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="name" />
          </Col>
        </S.FormGroup>
        {/* Gender ------------------------------------------------------ */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Gender' :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Select name="gender">
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
            <Typo variant="body1">Mother Name :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="mother_name" />
          </Col>
        </S.FormGroup>
        {/* Date of birth ----------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Date of birth :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <DatePicker name="dob" />
          </Col>
        </S.FormGroup>
        {/* Place Of birth ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Place Of birth :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="pob" placeholder="-auto change to upper case-" />
          </Col>
        </S.FormGroup>
        {/* KTP No. ---------------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={9}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">KTP No.' :</Typo>
          </S.LabelCol>
          <Col span={15}>
            <Input name="ktp_no" />
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
            <Input name="national_card" />
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
            <Input name="home_address_1" />
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
            <Input name="home_address_2" />
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
            <Input name="mobile_no" />
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
            <Input name="tel_no" />
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
            <Input name="bank_card_no" />
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
            <Input name="bank_account_no" />
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
            <Input name="bank_name" />
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
            <Input name="family_card_no" />
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
            <Input name="safety_insurance_no" />
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
            <Input name="health_insurance_no" />
          </Col>
        </S.FormGroup>
      </Col>
    </S.EmployeeInformation>
  );
}
