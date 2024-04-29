import { DatePickerProps } from "antd";
import * as S from "./DatePicker.styled";
import { useFormikContext } from "formik";
import dayjs from "dayjs";

interface IDatePickerProps extends DatePickerProps {
  name: string;
}
export default function DatePicker({ name }: IDatePickerProps) {
  const { setFieldValue, values } = useFormikContext<{
    [key: string]: string;
  }>();

  const onChange = (_: unknown, dateString: string | string[]) => {
    console.log(dateString);
    setFieldValue(name, dateString);
  };

  console.log(values[name]); // result 1991-05-04

  return (
    <S.DatePicker
      onChange={onChange}
      format="YYYY-MM-DD"
      value={values[name] ? dayjs(values[name]) : null}
    />
  );
}
