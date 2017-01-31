export default function (state=null, action) {
  switch (action.type) {
    case "SELECT_COMPANY":
      return action.payload.project;
    default:
      return state;    
  }
}
