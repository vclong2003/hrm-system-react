import * as S from "./Button.styled";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    JSX.IntrinsicAttributes {
  children: React.ReactNode;
}
export default function Button({ children, ...props }: IButtonProps) {
  return <S.Button {...props}>{children}</S.Button>;
}
