// Save Contract --------------------------------
export interface ISaveMultipleContractsPayload {
  employee_id: number;
  "modified_contracts[]": number;
  "deleted_contracts[]": number;
  "names[]": string;
  "contract_dates[]": string;
  "documents[]": File;
}
