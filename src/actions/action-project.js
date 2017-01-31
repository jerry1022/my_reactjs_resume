export const listProject = (project) => {
  console.log(project);
  return {
    type: "SELECT_PROJECT",
    payload: project
  }
} 
