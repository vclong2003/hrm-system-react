import { IRoute } from "@interfaces/common";
import Login from "@pages/Login/Login";

export const authRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
];
