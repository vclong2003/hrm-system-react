import * as S from "./EmployeeManagement.styled";

import { Route, Routes } from "react-router-dom";
import AddOrCreate from "./AddOrUpdate/AddOrUpdate";
import EmployeeList from "./EmployeeList/EmployeeList";

export default function EmployeeManagement() {
  return (
    <S.EmployeeManagement>
      <Routes>
        <Route path="" element={<EmployeeList />} />
        <Route path="add-or-update" element={<AddOrCreate />} />
        <Route path="add-or-update/:employeeId" element={<AddOrCreate />} />
      </Routes>
    </S.EmployeeManagement>
  );
}
