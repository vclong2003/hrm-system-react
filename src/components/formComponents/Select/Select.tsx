import { SelectProps } from "antd";
import * as S from "./Select.styled";

interface ISelectProps extends SelectProps {
  children: React.ReactNode;
}

export default function Select({ children, ...props }: ISelectProps) {
  return <S.Select {...props}>{children}</S.Select>;
}
