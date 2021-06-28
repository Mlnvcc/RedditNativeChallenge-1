import { combineReducers } from "redux";
import userReducer, { userPersistConfig } from "./userReducer";
import contentReducer from "./contentReducer";
import addButtonReducer from "./addButtonReducer";
import { persistReducer } from "redux-persist";
import searchReducer from "./searchReducer";

export const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  content: contentReducer,
  addButton: addButtonReducer,
  search: searchReducer,
});
