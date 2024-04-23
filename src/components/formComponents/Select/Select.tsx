import { SelectProps } from "antd";
import * as S from "./Select.styled";
import { Field, useFormikContext } from "formik";

interface ISelectProps extends SelectProps {
  children: React.ReactNode;
  name: string;
}

export default function Select({ children, name, ...props }: ISelectProps) {
  const { setFieldValue, values } = useFormikContext<{
    [key: string]: string;
  }>();

  const handleChange = (value: string) => {
    setFieldValue(name, value);
  };

  return (
    <Field
      component={S.Select}
      value={values[name]}
      onChange={handleChange}
      {...props}>
      {children}
    </Field>
  );
}
