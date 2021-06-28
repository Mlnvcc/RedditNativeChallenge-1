import { combineReducers } from "redux";
import userReducer, { userPersistConfig } from "./userReducer";
import contentReducer from "./contentReducer";
import addButtonReducer from "./addButtonReducer";
import { persistReducer } from "redux-persist";
import {profileReducer} from './editProfileReducer'

export const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  content: contentReducer,
  addButton: addButtonReducer,
  profile: profileReducer,
});
