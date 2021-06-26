import { combineReducers } from "redux";
import userReducer from "./userReducer";
import contentReducer from "./contentReducer";
import addButtonReducer from "./addButtonReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  content: contentReducer,
  addButton: addButtonReducer,
});
