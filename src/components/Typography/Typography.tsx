import { TypographySize, TypographyWeight } from "src/types/typography.types";
import * as S from "./Typography.styled";

interface ITypographyProps {
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
  children: React.ReactNode;
}

export default function Typography({
  size,
  weight,
  children,
}: ITypographyProps) {
  return (
    <S.Typography size={size} weight={weight}>
      {children}
    </S.Typography>
  );
}
