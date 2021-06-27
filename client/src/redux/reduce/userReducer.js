import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  REMOVE_ACCESS_TOKEN,
  SET_ACCESS_TOKEN,
  SET_USER_INFO,
  REMOVE_USER_INFO,
} from "../types/userTypes";

const initialState = { jwt: { access: null }, userInfo: null };
export const userPersistConfig = { key: "user", storage: AsyncStorage };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        jwt: { ...state.jwt, access: action.payload.accessToken },
      };

    case REMOVE_ACCESS_TOKEN:
      return { ...state, jwt: { ...state.jwt, access: null } };

    case SET_USER_INFO:
      return { ...state, userInfo: action.payload.userInfo };

    case REMOVE_USER_INFO:
      return { ...state, userInfo: null };

    default:
      return state;
  }
};

export default userReducer;
