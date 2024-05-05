import * as S from "./Avatar.styled";

interface IAvatarProps extends JSX.IntrinsicAttributes {
  username?: string;
}
export default function Avatar({ username, ...props }: IAvatarProps) {
  return <S.Avatar {...props}>{username?.slice(0, 2).toUpperCase()}</S.Avatar>;
}
