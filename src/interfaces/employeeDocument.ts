export interface IEmployeeDocument {
  id: number;
  employee_id: number;
  document: string;
  created_at: string;
  updated_at: string;
}

// Update employee documents ----------------------------------
export interface IUpdateEmployeeDocumentsPayload {
  employee_id: number;
  "deleted_ids[]"?: number[];
  "documents[]": File[];
}
