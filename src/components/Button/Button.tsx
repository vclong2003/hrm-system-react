import * as S from "./Button.styled";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    JSX.IntrinsicAttributes {
  children: React.ReactNode;
  size?: "large" | "medium";
  loading?: boolean;
}
export default function Button({
  children,
  size,
  loading,
  ...props
}: IButtonProps) {
  return (
    <S.Button size={size} $loading={loading} {...props}>
      {children}
    </S.Button>
  );
}
