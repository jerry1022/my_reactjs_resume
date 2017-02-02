export default function (state=null, action) {
  switch (action.type) {
    case "SELECT_PROJECT":
      return action.payload;
    case "REST_PROJECT":
      return null;
    default:
      return state;    
  }
}
