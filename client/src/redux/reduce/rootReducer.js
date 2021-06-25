import { combineReducers } from "redux";
import userReducer from "./userReducer";
import contentReducer from "./contentReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  content: contentReducer,
});
