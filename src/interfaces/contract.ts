// Get Employee Contracts ------------------------------
export interface IGetEmployeeContractsPayload {
  employee_id: number;
}

// Save Multiple Contracts -----------------------------
export interface ISaveMultipleContractsPayload {
  employee_id: number;
  names: string[];
  contract_dates: string[];
  documents: string[];
}
