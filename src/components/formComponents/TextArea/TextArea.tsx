import { TextAreaProps } from "antd/es/input";
import * as S from "./TextArea.styled";

interface ITextAreaProps extends TextAreaProps {}
export default function TextArea({ ...props }: ITextAreaProps) {
  return <S.TextArea {...props} />;
}
