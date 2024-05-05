import * as S from "./UserActions.styled";

import Avatar from "@components/Avatar/Avatar";
import { RootState } from "@store/index";
import { Popover } from "antd";
import { useSelector } from "react-redux";

import authUtil from "@utils/auth";

export default function UserActions() {
  const { user } = useSelector((state: RootState) => state.authState);

  const logout = () => authUtil.logout();

  const Menu = (
    <S.UserActionsMenu>
      <S.UserInfo>
        <Avatar username="admin" />
        <S.Username variant="h5"> {user?.username}</S.Username>
      </S.UserInfo>
      <S.LogoutBtn size="large" onClick={logout}>
        Sign Out
      </S.LogoutBtn>
      <S.ResetPasswordBtn to="#">Reset Password</S.ResetPasswordBtn>
    </S.UserActionsMenu>
  );

  return (
    <Popover content={Menu} trigger={"click"}>
      <Avatar username="admin" />
    </Popover>
  );
}
