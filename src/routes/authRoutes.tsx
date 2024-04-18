import { IRoute } from "@interfaces/common";
import ChangePassword from "@pages/ChangePassword/ChangePassword";
import ForgotPassword from "@pages/ForgotPassword/ForgotPassword";
import Login from "@pages/Login/Login";

export const authRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/change-password",
    component: <ChangePassword />,
  },
  {
    path: "/forgot-password",
    component: <ForgotPassword />,
  },
];
