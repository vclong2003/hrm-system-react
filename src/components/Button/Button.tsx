import * as S from "./Button.styled";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    JSX.IntrinsicAttributes {
  children: React.ReactNode;
  size?: "large" | "medium";
}
export default function Button({ children, size, ...props }: IButtonProps) {
  return (
    <S.Button size={size} {...props}>
      {children}
    </S.Button>
  );
}
