import AuthPage from "@layouts/AuthPage/AuthPage";
import { Route, Routes } from "react-router-dom";
import { authRoutes } from "./authRoutes";
import { managementRoutes } from "./managementRoutes";
import ManagementPage from "@layouts/ManagementPage/ManagementPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthPage />}>
        {authRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
      <Route element={<ManagementPage />}>
        {managementRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
}
