export default function (state=null, action) {
  switch (action.type) {
    case "SELECT_PROJECT":
      return action.payload;
    default:
      return state;    
  }
}
