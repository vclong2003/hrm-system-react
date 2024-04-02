import * as S from "./Typo.styled";

export type Weight = "regular" | "medium";
type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "body1" | "body2";

interface ITypoProps extends JSX.IntrinsicAttributes {
  children: React.ReactNode;
  weight?: Weight;
  variant: Variant;
}

export default function Typo({ variant, children, weight }: ITypoProps) {
  switch (variant) {
    case "h1":
      return <S.H1 $weight={weight}>{children}</S.H1>;
    case "h2":
      return <S.H2 $weight={weight}>{children}</S.H2>;
    case "h3":
      return <S.H3 $weight={weight}>{children}</S.H3>;
    case "h4":
      return <S.H4 $weight={weight}>{children}</S.H4>;
    case "h5":
      return <S.H5 $weight={weight}>{children}</S.H5>;
    case "body1":
      return <S.Body1 $weight={weight}>{children}</S.Body1>;
    case "body2":
      return <S.Body2 $weight={weight}>{children}</S.Body2>;
    default:
      return null;
  }
}
