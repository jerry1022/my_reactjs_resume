export default function (state=null, action) {
  switch (action.type) {
    case "SELECT_COMPANY":
      action.payload.showProjects = true;
      return action.payload;
    case "CLOSE_COMPANY_PROJECTS":
      action.payload.showProjects = false;
      return action.payload;
  default:
      return state;    
  }
}
