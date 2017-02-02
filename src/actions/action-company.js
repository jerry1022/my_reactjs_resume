export const selectCompany = (company) => {
  console.log('select ', company);
  return {
    type: "SELECT_COMPANY",
    payload: company
  }
} 

export const closeCompanyProjects = () => {
  return {
    type: "CLOSE_COMPANY_PROJECTS",
    payload: {
       project: [],
       showComapy: false
    }
  }
}
