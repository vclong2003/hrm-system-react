import { IBenefit } from "./benefit";

export interface IGrade {
  id: number;
  name: string;
  prefix: string;
  company_id: number;
  created_at: string;
  updated_at: string;
  benefits: IBenefit[];
}

// Get Grade List -------------------------------------
export interface IGetGradeListPayload {
  search?: string;
}
