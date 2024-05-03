import Typo from "@components/Typo/Typo";
import { Input as BaseInput } from "antd";
import styled from "styled-components";

interface IInputProps {
  $error?: boolean;
}

export const Input = styled(BaseInput)<IInputProps>`
  width: 100%;
  padding: var(--s-2) var(--s-3);

  font-size: var(--fs-body1);
  color: var(--c-black);
  font-family: var(--ff-regular);

  background-color: ${({ $error }) =>
    $error ? "var(--c-pink)" : "var(--c-white-1)"};
  border: ${({ $error }) => ($error ? "1px solid var(--c-pink-1)" : "none")};

  border-radius: var(--br-1);
`;

export const Error = styled(Typo)`
  color: var(--c-red);
`;
