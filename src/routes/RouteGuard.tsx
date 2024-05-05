import authUtils from "@utils/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function RouteGuard() {
  const token = authUtils.getToken();

  if (token) return <Outlet />;

  return <Navigate to="/login" />;
}
