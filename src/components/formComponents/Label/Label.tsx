import * as S from "./Label.styled";

interface IFormLabelProps {
  children: React.ReactNode;
}

export default function Label({ children }: IFormLabelProps) {
  return <S.Label>{children}</S.Label>;
}
