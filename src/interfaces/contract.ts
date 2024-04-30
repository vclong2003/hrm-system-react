export interface IContract {
  id: number;
  employee_id: number;
  contract_date: string;
  name: string;
  document: string;
  created_at: string;
  updated_at: string;
}

// Save Contract --------------------------------
export interface ISaveContractPayload {
  employee_id: number;
  "modified_contracts[]": number;
  "deleted_contracts[]": number;
  "names[]": string;
  "contract_dates[]": string;
  "documents[]": File;
}
