import { DatePickerProps } from "antd";
import * as S from "./DatePicker.styled";
import { useFormikContext } from "formik";

interface IDatePickerProps extends DatePickerProps {
  name: string;
}
export default function DatePicker({ name }: IDatePickerProps) {
  const { setFieldValue } = useFormikContext();

  const onChange = (_: unknown, dateString: string) => {
    setFieldValue(name, dateString);
  };

  return <S.DatePicker onChange={onChange} />;
}
