export const listProject = (project) => {
  console.log(project);
  return {
    type: "SELECT_PROJECT",
    payload: project
  }
} 

export const restProject = () => {
  return {
    type: "REST_PROJECT"
  }
}
