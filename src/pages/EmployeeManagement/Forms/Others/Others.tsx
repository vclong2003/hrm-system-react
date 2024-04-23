import { Col, Select as AntdSelect } from "antd";
import * as S from "./Others.styled";
import Typo from "@components/Typo/Typo";
import { Select } from "@components/formComponents";
import { ICreateEmployeePayload } from "@interfaces/employee";
import { useFormikContext } from "formik";
import TextArea from "@components/formComponents/TextArea/TextArea";

interface IOthersProps {
  show?: boolean;
}
export default function Others({ show }: IOthersProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  return (
    <S.Others $show={show}>
      <Col span={12}>
        {/* Grade ------------------------------------ */}
        <S.FormGroup>
          <S.LabelCol span={8}>
            <Typo variant="body1">Grade</Typo>
          </S.LabelCol>
          <Col span={16}>
            <Select name="grade_id"></Select>
          </Col>
        </S.FormGroup>
        {/* Benefits ---------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={8}>
            <Typo variant="body1">Benefits</Typo>
          </S.LabelCol>
          <Col span={16}></Col>
        </S.FormGroup>
        {/* Remark ------------------------------------- */}
        <S.FormGroup>
          <Col span={8}>
            <Typo variant="body1">Remark</Typo>
          </Col>
          <Col span={16}>
            <TextArea name="remark" autoSize={{ minRows: 3, maxRows: 5 }} />
          </Col>
        </S.FormGroup>
      </Col>
    </S.Others>
  );
}
