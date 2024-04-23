import { default as BaseTextArea } from "antd/es/input/TextArea";
import styled from "styled-components";

export const TextArea = styled(BaseTextArea)`
  width: 100%;
  padding: var(--s-2) var(--s-3);

  font-size: var(--fs-body1);
  color: var(--c-black);
  font-family: var(--ff-regular);

  background-color: var(--c-white-1);
  border: none;

  border-radius: var(--br-1);
`;
