import * as S from "./ContractInformation.styled";

import ContractManager from "../../ContractManager/ContractManager";
import Typo from "@components/Typo/Typo";
import { Select as AntdSelect } from "antd";
import { DatePicker, Select } from "@components/formComponents";
import { Col } from "antd";

import { useFormikContext } from "formik";

import { ICreateEmployeePayload } from "@interfaces/employee";
import { EType } from "src/enums/employee";

export default function ContractInformation() {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  return (
    <S.ContractInformation>
      <Col span={10}>
        {/* Start date -------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Date Start</Typo>
          </S.LabelCol>
          <Col span={14}>
            <DatePicker
              name="contract_start_date"
              error={errors.contract_start_date}
            />
          </Col>
        </S.FormGroup>
        {/* Type -------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Employee Type</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Select name="type" error={errors.type}>
              <AntdSelect.Option value={EType.Permanent}>
                Permanent
              </AntdSelect.Option>
              <AntdSelect.Option value={EType.PartTimeWorker}>
                Part-time worker
              </AntdSelect.Option>
              <AntdSelect.Option value={EType.ContractWorker}>
                Contract worker
              </AntdSelect.Option>
            </Select>
          </Col>
        </S.FormGroup>
      </Col>
      {/* Contract Manager --------------------------- */}
      <Col span={24}>
        <ContractManager />
      </Col>
    </S.ContractInformation>
  );
}
