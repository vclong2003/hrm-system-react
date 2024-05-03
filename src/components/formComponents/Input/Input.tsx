import { InputProps } from "antd";
import * as S from "./Input.styled";
import { Field } from "formik";

export interface IInputProps extends InputProps {
  error?: string;
}

export default function Input({ error, ...props }: IInputProps) {
  return (
    <>
      <Field as={S.Input} $error={!!error} {...props} />
      {error && <S.Error variant="body2">{error}</S.Error>}
    </>
  );
}
