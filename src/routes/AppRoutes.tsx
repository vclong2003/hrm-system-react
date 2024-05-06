import { Route, Routes } from "react-router-dom";

import RouteGuard from "./RouteGuard";
import AuthPage from "@layouts/AuthPage/AuthPage";
import ManagementPage from "@layouts/ManagementPage/ManagementPage";

import { authRoutes } from "./authRoutes";
import { managementRoutes } from "./managementRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthPage />}>
        {authRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
      <Route element={<RouteGuard />}>
        <Route element={<ManagementPage />}>
          {managementRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}
