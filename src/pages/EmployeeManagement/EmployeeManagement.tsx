import * as S from "./EmployeeManagement.styled";

import { Route, Routes } from "react-router-dom";
import AddOrCreate from "./AddOrCreate/AddOrCreate";
import EmployeeList from "./EmployeeList/EmployeeList";

export default function EmployeeManagement() {
  return (
    <S.EmployeeManagement>
      <Routes>
        <Route path="" element={<EmployeeList />} />
        <Route path="add-or-create" element={<AddOrCreate />} />
        <Route path="add-or-create/:id" element={<AddOrCreate />} />
      </Routes>
    </S.EmployeeManagement>
  );
}
