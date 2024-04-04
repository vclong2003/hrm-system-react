import styled, { css } from "styled-components";
import { Weight } from "./Typo";

interface ITypoProps {
  $weight?: Weight;
}

const BaseStyle = css<ITypoProps>`
  font-family: ${({ $weight }) =>
    $weight === "medium" ? "var(--ff-medium)" : "var(--ff-regular)"};
`;

export const H1 = styled.h1<ITypoProps>`
  ${BaseStyle}
  font-size: var(--fs-h1);
`;

export const H2 = styled.h2<ITypoProps>`
  ${BaseStyle}
  font-size: var(--fs-h2);
`;

export const H3 = styled.h3<ITypoProps>`
  ${BaseStyle}
  font-size: var(--fs-h3);
`;

export const H4 = styled.h4<ITypoProps>`
  ${BaseStyle}
  font-size: var(--fs-h4);
`;

export const H5 = styled.h5<ITypoProps>`
  ${BaseStyle}
  font-size: var(--fs-h5);
`;

export const H6 = styled.h6<ITypoProps>`
  ${BaseStyle}
  font-size: var(--fs-h6);
`;

export const Body1 = styled.p<ITypoProps>`
  ${BaseStyle}
  font-size: var(--fs-body1);
`;

export const Body2 = styled.p<ITypoProps>`
  ${BaseStyle}
  font-size: var(--fs-body2);
`;
