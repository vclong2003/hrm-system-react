import { DatePickerProps } from "antd";
import * as S from "./DatePicker.styled";
import { useFormikContext } from "formik";
import dayjs from "dayjs";

interface IDatePickerProps extends DatePickerProps {
  name: string;
  error?: string;
}
export default function DatePicker({ name, error }: IDatePickerProps) {
  const { setFieldValue, values } = useFormikContext<{
    [key: string]: string;
  }>();

  const onChange = (_: unknown, dateString: string | string[]) => {
    setFieldValue(name, dateString);
  };

  return (
    <>
      <S.DatePicker
        onChange={onChange}
        format="YYYY-MM-DD"
        value={values[name] ? dayjs(values[name]) : null}
        $error={!!error}
      />
      {error && <S.Error variant="body2">{error}</S.Error>}
    </>
  );
}
