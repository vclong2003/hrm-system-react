import { TextAreaProps } from "antd/es/input";
import * as S from "./TextArea.styled";
import { useFormikContext } from "formik";

interface ITextAreaProps extends TextAreaProps {
  name: string;
  error?: string;
}
export default function TextArea({ name, error, ...props }: ITextAreaProps) {
  const { setFieldValue, values } = useFormikContext<{
    [key: string]: string;
  }>();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFieldValue(name, e.target.value);
  };

  return (
    <>
      <S.TextArea
        name={name}
        onChange={handleChange}
        value={values[name]}
        $error={!!error}
        {...props}
      />
      {error && <S.Error variant="body2">{error}</S.Error>}
    </>
  );
}
