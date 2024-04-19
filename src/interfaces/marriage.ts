export interface IMarriage {
  id: number;
  name: string;
  code: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

// Get Marriage List ---------------------------------------------
export interface IGetMarriagesPayload {
  search: string;
  page: number;
}
