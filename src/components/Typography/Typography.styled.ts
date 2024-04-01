import { TypographySize, TypographyWeight } from "src/types/typography.types";
import styled from "styled-components";

interface ITypographyProps {
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
}

export const Typography = styled.p<ITypographyProps>`
  font-size: var(--fs-${({ size }) => size || "md"});
  font-family: var(--f-${({ weight }) => weight || "regular"});
  color: ${({ color }) => color || "var(--c-text)"};
`;
