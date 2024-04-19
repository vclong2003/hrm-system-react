export interface IPosition {
  id: number;
  name: string;
  code: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

// Get Posotion List -------------------------
export interface IGetPositionListPayload {
  search: string;
  page: number;
  company_id: number;
}
