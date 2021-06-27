import { CHANGE_STATUS_ADDBUTTON } from "../types/addButton";

const initialState = false;

const addButtonReducer = (state = initialState, action) => {
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
