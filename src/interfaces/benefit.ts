export interface IBenefit {
  id: number;
  name: string;
  code: string;
  type: number;
  value: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

// Get Benefit List -----------------------------------
export interface IGetBenefitListPayload {
  search?: string;
  grade_id?: number;
}
