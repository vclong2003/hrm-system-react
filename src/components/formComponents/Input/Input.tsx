import { InputProps } from "antd";
import * as S from "./Input.styled";

export interface IInputProps extends InputProps {
  error?: string;
}

export default function Input({ error, ...props }: IInputProps) {
  return (
    <>
      <S.Input {...props} />
      {error && error}
    </>
  );
}
