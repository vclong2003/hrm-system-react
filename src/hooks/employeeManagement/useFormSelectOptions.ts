import marriageService from "@services/marriage";
import departmentService from "@services/department";
import positionService from "@services/position";
import gradeService from "@services/grade";
import { useEffect, useState } from "react";
import { IPosition } from "@interfaces/position";
import { IDepartment } from "@interfaces/department";
import { IMarriage } from "@interfaces/marriage";
import { IGrade } from "@interfaces/grade";

export default function useFormSelectOptions() {
  const [marriages, setMarriages] = useState<IMarriage[]>([]);
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [positions, setPositions] = useState<IPosition[]>([]);
  const [grades, setGrades] = useState<IGrade[]>([]);

  useEffect(() => {
    Promise.all([
      marriageService.getMarriageList({}),
      departmentService.getDepartmentList({}),
      positionService.getPositionList({}),
      gradeService.getGradeList({}),
    ]).then(([marriageData, departmentData, positionData, gradeData]) => {
      setMarriages(marriageData);
      setDepartments(departmentData);
      setPositions(positionData);
      setGrades(gradeData);
    });
  }, []);

  return { marriages, departments, positions, grades };
}
