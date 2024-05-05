import { ICreateEmployeePayload } from "@interfaces/employee";
import { FormikErrors } from "formik";

const checkErrors = (errors: { [key: string]: unknown }, fields: string[]) => {
  return fields.some((field) => Boolean(errors[field]));
};

const checkEmployeeInfoErrors = (
  errors: FormikErrors<ICreateEmployeePayload>
): boolean => {
  return checkErrors(errors, [
    "name",
    "gender",
    "mother_name",
    "dob",
    "pob",
    "ktp_no",
    "nc_id",
    "home_address_1",
    "home_address_2",
    "mobile_no",
    "tel_no",
    "marriage_id",
    "card_number",
    "bank_account_no",
    "bank_name",
    "family_card_number",
    "safety_insurance_no",
    "health_insurance_no",
  ]);
};

const checkContractInfoError = (
  errors: FormikErrors<ICreateEmployeePayload>
): boolean => {
  return checkErrors(errors, ["contract_start_date", "type"]);
};

const checkEmploymentInfoError = (
  errors: FormikErrors<ICreateEmployeePayload>
): boolean => {
  return checkErrors(errors, ["department_id", "position_id", "shift"]);
};

const checkOtherInfoError = (
  errors: FormikErrors<ICreateEmployeePayload>
): boolean => {
  return checkErrors(errors, ["grade_id", "remark"]);
};

const checkSalaryAndWagesError = (
  errors: FormikErrors<ICreateEmployeePayload>
): boolean => {
  return checkErrors(errors, [
    "basic_salary",
    "audit_salary",
    "safety_insurance",
    "health_insurance",
  ]);
};

export default {
  checkEmployeeInfoErrors,
  checkContractInfoError,
  checkEmploymentInfoError,
  checkSalaryAndWagesError,
  checkOtherInfoError,
};
