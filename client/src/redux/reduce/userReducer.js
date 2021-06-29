import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  REMOVE_TOKEN,
  SET_TOKEN,
  SET_USER_INFO,
  REMOVE_USER_INFO,
  CHANGE_STATUS_LIKE,
  CHANGE_STATUS_COMMENT,
  CHANGE_STATUS_OLD,
} from "../types/userTypes";

const initialState = {
  jwt: { access: null, refresh: null },
  userInfo: null,
  statusSearch: { likes: false, comments: false, old: false },
};

export const userPersistConfig = {
  key: "user",
  storage: AsyncStorage,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        jwt: {
          ...state.jwt,
          access: action.payload.accessToken,
          refresh: action.payload.refreshToken,
        },
      };

    case REMOVE_TOKEN:
      return { ...state, jwt: { ...state.jwt, access: null, refresh: null } };

    case SET_USER_INFO:
      return { ...state, userInfo: action.payload.userInfo };

    case REMOVE_USER_INFO:
      return { ...state, userInfo: null };

    case CHANGE_STATUS_LIKE:
      return {
        ...state,
        statusSearch: {
          ...state.statusSearch,
          likes: !state.statusSearch.likes,
          comments: false,
          old: false,
        },
      };
    case CHANGE_STATUS_COMMENT:
      return {
        ...state,
        statusSearch: {
          ...state.statusSearch,
          likes: false,
          comments: !state.statusSearch.comments,
          old: false,
        },
      };
    case CHANGE_STATUS_OLD:
      return {
        ...state,
        statusSearch: {
          ...state.statusSearch,
          likes: false,
          comments: false,
          old: !state.statusSearch.old,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
