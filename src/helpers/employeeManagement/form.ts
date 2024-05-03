// export const sanitizeEmployeeData = (
//   employee: IEmployee
// ): ICreateEmployeePayload => {
//   const sanitizedData: Partial<ICreateEmployeePayload> = {};

//   Object.keys(employee).forEach((key) => {
//     if (key in employee) {
//       sanitizedData[key as keyof ICreateEmployeePayload] =
//         employee[key as keyof IEmployee];
//     }
//   });

//   return sanitizedData as ICreateEmployeePayload;
// };

const checkErrors = (errors: { [key: string]: unknown }, fields: string[]) => {
  return fields.some((field) => Boolean(errors[field]));
};

export default { checkErrors };
