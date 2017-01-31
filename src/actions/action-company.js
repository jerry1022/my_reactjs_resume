export const selectCompany = (company) => {
  console.log('select ', company);
  return {
    type: "SELECT_COMPANY",
    payload: company
  }
} 
