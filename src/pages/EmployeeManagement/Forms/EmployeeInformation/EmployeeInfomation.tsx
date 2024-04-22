import * as S from "./EmployeeInformation.styled";
import Typo from "@components/Typo/Typo";
import { Input, Select } from "@components/formComponents";
import { Col, DatePicker, Row } from "antd";
import { Field } from "formik";

export default function EmployeeInformation() {
  return (
    <Row>
      <Col span={11}>
        {/* NIK :
Name*
Gender' :
Mother Name :
Date of birtht :
Place Of birth :
KTP No.' :
National Card :
Home Address I :
Home Address 2 : */}
        {/* NIK ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={8}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">NIK :</Typo>
          </S.LabelCol>
          <Col span={16}>
            <Input disabled />
          </Col>
        </S.FormGroup>
        {/* Name ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={8}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Name* :</Typo>
          </S.LabelCol>
          <Col span={16}>
            <Input name="name" />
          </Col>
        </S.FormGroup>
        {/* Gender ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={8}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Gender' :</Typo>
          </S.LabelCol>
          <Col span={16}>
            <Select name="gender"></Select>
          </Col>
        </S.FormGroup>
        {/* Mother Name ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={8}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Mother Name :</Typo>
          </S.LabelCol>
          <Col span={16}>
            <Input name="mother_name" />
          </Col>
        </S.FormGroup>
        {/* Date of birtht ---------------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol
            span={8}
            style={{ alignItems: "center", display: "flex" }}>
            <Typo variant="body1">Date of birtht :</Typo>
          </S.LabelCol>
          <Col span={16}>
            <Field as={DatePicker} name="date_of_birth" />
          </Col>
        </S.FormGroup>
      </Col>
      <Col span={2} />
      <Col span={11}>col-12</Col>
    </Row>
  );
}
