export interface IDepartment {
  id: number;
  name: string;
  code: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

// Get department list --------------------------------
export interface IGetDepartmentListPayload {
  search?: string;
  page?: number;
}
