import { Navigate, Outlet } from "react-router-dom";
import authUtils from "@utils/auth";

export default function RouteGuard() {
  const token = authUtils.getToken();

  if (token) return <Outlet />;

  return <Navigate to="/login" />;
}
