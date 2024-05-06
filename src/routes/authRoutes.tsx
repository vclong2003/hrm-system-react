import { IRoute } from "@interfaces/common";

import ResetPassword from "@pages/ResetPassword/ResetPassword";
import ForgotPassword from "@pages/ForgotPassword/ForgotPassword";
import Login from "@pages/Login/Login";

export const authRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/reset-password",
    component: <ResetPassword />,
  },
  {
    path: "/forgot-password",
    component: <ForgotPassword />,
  },
];
