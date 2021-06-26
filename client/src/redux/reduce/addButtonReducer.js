import { CHANGE_STATUS_ADDBUTTON } from "../types/addButton";
const addButtonReducer = (state = null, action) => {
  const { type } = action;

  switch (type) {
    case CHANGE_STATUS_ADDBUTTON: {
      return !state;
    }
    default:
      return state;
  }
};
export default addButtonReducer;
