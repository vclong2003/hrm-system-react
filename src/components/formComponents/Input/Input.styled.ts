import { Input as BaseInput } from "antd";
import styled from "styled-components";

interface IInputProps {
  $error?: boolean;
}

export const Input = styled(BaseInput)<IInputProps>`
  padding: var(--s-2);

  font-size: var(--fs-body1);
  color: var(--c-black);
  font-family: var(--f-regular);

  background-color: ${({ $error }) =>
    $error ? "var(--c-pink-1)" : "var(--c-gray-1)"};
  border: ${({ $error }) => ($error ? "1px solid var(--c-pink-2)" : "none")};
  border-radius: var(--br-1);
`;
