import { EGender, EShift, EType } from "src/enums/employee";
import { IDepartment } from "./department";

export interface IEmployee {
  /*
  {
    "id": 202,
    "old_staff_id": "AA01453",
    "staff_id": "AA01453",
    "name": "ADEN SUPRIANI",
    "gender": 0,
    "department_id": 7,
    "company_id": 1,
    "marriage_id": 1,
    "position_id": 60,
    "type": "2",
    "mother_name": "SUHARTI",
    "dob": "2001-09-17",
    "pob": "BOGOR",
    "ktp_no": "3201325610010002",
    "nc_id": null,
    "home_address_1": "KP. LULUT, RT 005 / RW 004 DESA LULUT",
    "home_address_2": "KEC. KLAPANUNGGAL, BOGOR JAWA BARAT",
    "mobile_no": "089611350896",
    "tel_no": null,
    "bank_account_no": "195810017580",
    "bank_name": "OCBC NISP",
    "card_number": null,
    "family_card_number": null,
    "health_insurance_no": "0000385051511",
    "safety_insurance_no": "21005016239",
    "education_background": null,
    "emergency_contract": null,
    "emergency_relationship": null,
    "emergency_name": null,
    "basic_salary": 0,
    "audit_salary": 0,
    "health_insurance": 0,
    "safety_insurance": 0,
    "safety_insurance_audit": null,
    "health_insurance_audit": null,
    "meal_allowance": 0,
    "entitle_ot": 1,
    "meal_allowance_paid": 1,
    "operational_allowance_paid": 1,
    "attendance_allowance_paid": 0,
    "minimum_salary_used": "1",
    "hidden_on_payroll": "",
    "contract_start_date": "2020-12-06",
    "resign_reason": null,
    "resign_effective_date": null,
    "resign_date": null,
    "shift": "1",
    "grade_id": 8,
    "remark": null,
    "created_at": "2023-05-31T15:46:06.000000Z",
    "updated_at": "2024-04-19T03:38:46.000000Z",
    "deleted_at": null,
    "department": {
      "id": 7,
      "name": "LINE 02",
      "code": "LINE 02",
      "company_id": 1,
      "created_at": "2023-05-31T15:23:16.000000Z",
      "updated_at": "2023-05-31T15:23:16.000000Z"
    },
    "position": {
      "id": 60,
      "name": "COMPLIANCE MANAGE",
      "code": "COMPLIANCE MANAGE",
      "company_id": 1,
      "created_at": "2023-05-31T15:25:03.000000Z",
      "updated_at": "2023-05-31T15:25:03.000000Z"
    },
    "company": {
      "id": 1,
      "name": "SBM",
      "full_name": "PT.SENTRAL BRA MAKMUR",
      "address": "Jl. Mercedes Benz RT.01 RW.02 Desa. Cicadas, Kec. Gunung Putri, Kab. Bogor, Jawa Barat 16964, Indonesia",
      "place": "Bogor",
      "tel_no": "+62-21 8677808/21",
      "mail": "hrm_admin@sentralbra.com",
      "prefix": "S",
      "created_at": "2023-05-31T22:18:15.000000Z",
      "updated_at": "2024-01-04T23:22:47.000000Z"
    },
    "marriage": {
      "id": 1,
      "name": "TK",
      "code": "TK",
      "company_id": 1,
      "created_at": "2023-05-31T15:23:06.000000Z",
      "updated_at": "2023-05-31T15:23:06.000000Z"
    },
    "manager": null,
    "benefits": [],
    "documents": [
      {
        "id": 1,
        "employee_id": 202,
        "document": "https://api-training.hrm.div4.pgtest.co/storage/documents/202/Gojo-Satoru_1713453302.jpg",
        "created_at": "2024-04-18T22:15:02.000000Z",
        "updated_at": null
      },
      {
        "id": 2,
        "employee_id": 202,
        "document": "https://api-training.hrm.div4.pgtest.co/storage/documents/202/Gojo-Satoru_1713496531.jpg",
        "created_at": "2024-04-19T10:15:31.000000Z",
        "updated_at": null
      },
      {
        "id": 6,
        "employee_id": 202,
        "document": "https://api-training.hrm.div4.pgtest.co/storage/documents/202/boycry_1713497677.jpg",
        "created_at": "2024-04-19T10:34:37.000000Z",
        "updated_at": null
      }
    ],
    "contracts": [],
    "employee_contracts": [],
    "salaries_history": [
      {
        "id": 162,
        "employee_id": 202,
        "manager_id": 42,
        "company_id": 1,
        "basic_salary": 0,
        "basic_salary_new": 0,
        "audit_salary": 0,
        "audit_salary_new": 0,
        "safety_insurance": 0,
        "safety_insurance_new": 0,
        "health_insurance": 0,
        "health_insurance_new": 0,
        "meal_allowance": 0,
        "meal_allowance_new": 0,
        "created_at": "2024-04-15T06:24:23.000000Z",
        "updated_at": "2024-04-15T06:24:23.000000Z",
        "safety_insurance_audit": null,
        "safety_insurance_audit_new": null,
        "health_insurance_audit": null,
        "health_insurance_audit_new": null
      }
    ],
    "annual_leaves": [],
    "allowed_to_view_salary": 0
  }
  */
  id: number;
  old_staff_id: string;
  staff_id: string;
  name: string;
  gender: EGender;
  department_id: number;
  company_id: number;
  marriage_id: number;
  position_id: number;
  type: EType;
  mother_name: string;
  dob: string;
  pob: string;
  ktp_no: string;
  nc_id: number;
  home_address_1: string;
  home_address_2: string;
  mobile_no: string;
  tel_no: number;
  bank_account_no: string;
  bank_name: string;
  card_number: number;
  family_card_number: number;
  health_insurance_no: string;
  safety_insurance_no: string;
  education_background: string;
  emergency_contract: string;
  emergency_relationship: string;
  emergency_name: string;
  basic_salary: number;
  audit_salary: number;
  health_insurance: number;
  safety_insurance: number;
  safety_insurance_audit: number;
  health_insurance_audit: number;
  meal_allowance: number;
  entitle_ot: number;
  meal_allowance_paid: number;
  operational_allowance_paid: number;
  attendance_allowance_paid: number;
  minimum_salary_used: string;
  hidden_on_payroll: string;
  contract_start_date: string;
  resign_reason: string;
  resign_effective_date: string;
  resign_date: string;
  shift: EShift;
  grade_id: number;
  remark: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  department: IDepartment;
}

// Get Employees ---------------------------------------------
export interface IGetEmployeesPayload {
  search: string;
  page: number;
}
export interface IGetEmplyeesResponse {
  current_page: number;
  last_page: string;
  data: IEmployee[];
}

// Create Employee -------------------------------------------
export interface ICreateEmployeePayload {
  name: string;
  card_number: number;
  gender: EGender; // Gender
  mother_name: string;
  dob: string;
  pob: string; // Place of birth
  ktp_no: number;
  nc_id: number; // National Card ID
  home_address_1: string;
  home_address_2: string;
  mobile_no: number;
  tel_no: number;
  marriage_id: number; // Marriage Status
  bank_account_no: number;
  bank_name: string;
  family_card_number: number;
  safety_insurance_no: number;
  health_insurance_no: number;
  department_id: number;
  position_id: number;
  shift: EShift; // Shift (1, 2)
  type: EType; // Employee Type (0: Permanent, 1: Part-time worker, 2: Contract worker)
  entitle_ot: string; // Entitle OT (0: unchecked, 1:checked)
  meal_allowance_paid: string; // Meal Allowance Paid (0: unchecked, 1:checked)
  operational_allowance_paid: string; // Operational Allowance Paid (0: unchecked, 1:checked)
  attendance_allowance_paid: string; // Attendance Allowance Paid (0: unchecked, 1:checked)
  basic_salary: number;
  audit_salary: number;
  safety_insurance: number;
  health_insurance: number;
  contract_start_date: string; // Contract Start Date Format: yyyy-mm-dd
  grade_id: number;
  remark: string;
  benefits: number[];
  account_user_id: number; // User Id
}

// Get employee By Id ----------------------------------------
export interface IGetEmployeeByIdPayload {
  id: number;
}

// Update Employee -------------------------------------------
export interface IUpdateEmployeePayload {
  id: number;
  name: string;
  card_number: number;
  gender: EGender; // Gender
  mother_name: string;
  dob: string; // Date of birth (Format: yyyy-mm-dd)
  pob: string; // Place of birth
  ktp_no: number;
  nc_id: number; // National Card ID
  home_address_1: string;
  home_address_2: string;
  mobile_no: number;
  tel_no: number;
  marriage_id: number; // Marriage Status
  bank_account_no: number;
  bank_name: string;
  family_card_number: number;
  safety_insurance_no: number;
  health_insurance_no: number;
  department_id: number;
  position_id: number;
  shift: EShift; // Shift (1, 2)
  type: EType; // Employee Type (0: Permanent, 1: Part-time worker, 2: Contract worker)
  entitle_ot: string; // Entitle OT (0: unchecked, 1:checked)
  meal_allowance_paid: string; // Meal Allowance Paid (0: unchecked, 1:checked)
  operational_allowance_paid: string; // Operational Allowance Paid (0: unchecked, 1:checked)
  attendance_allowance_paid: string; // Attendance Allowance Paid (0: unchecked, 1:checked)
  basic_salary: number;
  audit_salary: number;
  safety_insurance: number;
  health_insurance: number;
  contract_start_date: string; // Contract Start Date Format: yyyy-mm-dd
  grade_id: number;
  remark: string;
  benefits: number[];
  account_user_id: number; // User Id
}

// Delete Multiple Employees ----------------------------------
export interface IDeleteMultipleEmployeesPayload {
  record_ids: number[];
}

// Get available employyee list for assign --------------------
export interface IGetAvailableForAssignPayload {
  id: string; // User id
  search: string;
  department_id: number;
  position_id: number;
}

// Get employee list for account user --------------------------
export interface IGetEmployeeListForAccountUserPayload {
  department_id: string;
  search: string;
}

// Get default salary -----------------------------------------
export interface IGetDefaultSalaryPayload {
  id: number; // Employee id
}
