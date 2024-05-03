import Typo from "@components/Typo/Typo";
import { default as BaseTextArea } from "antd/es/input/TextArea";
import styled from "styled-components";

interface ITextAreaProps {
  $error?: boolean;
}
export const TextArea = styled(BaseTextArea)<ITextAreaProps>`
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
