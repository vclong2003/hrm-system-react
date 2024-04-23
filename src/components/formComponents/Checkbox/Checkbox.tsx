import { useFormikContext } from "formik";
import * as S from "./Checkbox.styled";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface ICheckboxProps {
  name: string;
  children: string;
}
export default function Checkbox({ name, children }: ICheckboxProps) {
  const { setFieldValue, values } = useFormikContext<{
    [key: string]: number;
  }>();

  const onChange = (e: CheckboxChangeEvent) => {
    setFieldValue(name, e.target.checked ? 1 : 0);
  };

  return (
    <S.Checkbox onChange={onChange} checked={values[name] === 1}>
      {children}
    </S.Checkbox>
  );
}
