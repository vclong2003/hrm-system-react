import { Route, Routes } from "react-router-dom";
import ChangePassword from "./ChangePassword/ChangePassword";

export default function Settings() {
  return (
    <Routes>
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
}
