import Button from "@components/Button/Button";
import styled from "styled-components";

interface IItemProps {
  $isActive?: boolean;
  $isError?: boolean;
}
// error + inactive: bgc --c-pink, color --c-red-1
// error + active: bgc --c-red-1, color --c-pink
// active: bgc --c-blue, color --c-white
// inactive: bgc --c-blue-3, color --c-blue
export const Item = styled(Button)<IItemProps>`
  background-color: ${({ $isActive, $isError }) => {
    if ($isError && $isActive) return "var(--c-red-1)";
    if ($isError) return "var(--c-pink)";
    if ($isActive) return "var(--c-blue)";
    return "var(--c-blue-3)";
  }};
  color: ${({ $isActive, $isError }) => {
    if ($isError && $isActive) return "var(--c-pink)";
    if ($isError) return "var(--c-red-1)";
    if ($isActive) return "var(--c-white)";
    return "var(--c-blue)";
  }};
`;
