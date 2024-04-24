import marriageService from "@services/marriage";
import departmentService from "@services/department";
import positionService from "@services/position";
import gradeService from "@services/grade";
import benefitService from "@services/benefit";

import { useEffect, useState } from "react";
import { IPosition } from "@interfaces/position";
import { IDepartment } from "@interfaces/department";
import { IMarriage } from "@interfaces/marriage";
import { IGrade } from "@interfaces/grade";
import { IBenefit } from "@interfaces/benefit";

export default function useFormSelectOptions() {
  const [marriages, setMarriages] = useState<IMarriage[]>([]);
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [positions, setPositions] = useState<IPosition[]>([]);
  const [grades, setGrades] = useState<IGrade[]>([]);
  const [benefits, setBenefits] = useState<IBenefit[]>([]);

  useEffect(() => {
    Promise.all([
      marriageService.getMarriageList({}),
      departmentService.getDepartmentList({}),
      positionService.getPositionList({}),
      gradeService.getGradeList({}),
      benefitService.getBenefitList({}),
    ]).then(([marriages, departments, positions, grades, benefits]) => {
      setMarriages(marriages);
      setDepartments(departments);
      setPositions(positions);
      setGrades(grades);
      setBenefits(benefits);
    });
  }, []);

  return { marriages, departments, positions, grades, benefits };
}
