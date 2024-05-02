import { Col } from "antd";
import * as S from "./ContractInformation.styled";
import { useFormikContext } from "formik";
import Typo from "@components/Typo/Typo";
import { ICreateEmployeePayload } from "@interfaces/employee";
import { Select as AntdSelect } from "antd";
import DatePicker from "@components/formComponents/DatePicker/DatePicker";
import { Select } from "@components/formComponents";
import { EType } from "src/enums/employee";
import { useEffect } from "react";
import helpers from "@helpers/employeeManagement/form";
import ContractManager from "../../ContractManager/ContractManager";

interface IContractInformationProps {
  setError: (isError: boolean) => void;
}
export default function ContractInformation({
  setError,
}: IContractInformationProps) {
  const { errors } = useFormikContext<ICreateEmployeePayload>();

  useEffect(() => {
    const isAnyError = helpers.checkErrors(errors, [
      "contract_start_date",
      "type",
    ]);
    setError(isAnyError);
  }, [errors]);

  return (
    <S.ContractInformation>
      <Col span={10}>
        {/* Start date -------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Date Start</Typo>
          </S.LabelCol>
          <Col span={14}>
            <DatePicker name="contract_start_date" />
          </Col>
        </S.FormGroup>
        {/* Type -------------------------------------- */}
        <S.FormGroup>
          <S.LabelCol span={10}>
            <Typo variant="body1">Employee Type</Typo>
          </S.LabelCol>
          <Col span={14}>
            <Select name="type">
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