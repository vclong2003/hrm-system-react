import { DatePickerProps } from "antd";
import * as S from "./DatePicker.styled";
import { useFormikContext } from "formik";
import moment from "moment";

interface IDatePickerProps extends DatePickerProps {
  name: string;
}
export default function DatePicker({ name }: IDatePickerProps) {
  const { setFieldValue, values } = useFormikContext<{
    [key: string]: string;
  }>();
  const onChange = (_: unknown, dateString: string | string[]) => {
    setFieldValue(name, dateString);
  };

  const dateValue = values[name] ? moment(values[name]) : null;

  return <S.DatePicker onChange={onChange} value={dateValue} />;
}
