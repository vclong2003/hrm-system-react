import { HTMLAttributes } from "react";
import * as S from "./Typo.styled";

export type Weight = "regular" | "medium";
type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";

interface ITypoProps
  extends JSX.IntrinsicAttributes,
    HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  weight?: Weight;
  variant: Variant;
}

export default function Typo({
  variant,
  children,
  weight,
  ...props
}: ITypoProps) {
  switch (variant) {
    case "h1":
      return (
        <S.H1 $weight={weight} {...props}>
          {children}
        </S.H1>
      );
    case "h2":
      return (
        <S.H2 $weight={weight} {...props}>
          {children}
        </S.H2>
      );
    case "h3":
      return (
        <S.H3 $weight={weight} {...props}>
          {children}
        </S.H3>
      );
    case "h4":
      return (
        <S.H4 $weight={weight} {...props}>
          {children}
        </S.H4>
      );
    case "h5":
      return (
        <S.H5 $weight={weight} {...props}>
          {children}
        </S.H5>
      );
    case "h6":
      return (
        <S.H6 $weight={weight} {...props}>
          {children}
        </S.H6>
      );
    case "body1":
      return (
        <S.Body1 $weight={weight} {...props}>
          {children}
        </S.Body1>
      );
    case "body2":
      return (
        <S.Body2 $weight={weight} {...props}>
          {children}
        </S.Body2>
      );
    default:
      return null;
  }
}
