import {
  REMOVE_TOKEN,
  SET_TOKEN,
  SET_USER_INFO,
  REMOVE_USER_INFO,
  CHANGE_STATUS_LIKE,
  CHANGE_STATUS_COMMENT,
  CHANGE_STATUS_OLD
} from "../types/userTypes";
import * as endPoints from "../../config/endPoints";
import { disableLoader, enableLoader } from "./loader.ac";
import {
  signUp as apiSignUp,
  signIn as apiSignIn,
  signOut as apiSignOut,
} from "../../api/auth";

export const getUserFromServer = id => async dispatch => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.getUser(id), {
    credentials: "include",
  });
  if (response.status === 200) {
    const currentUser = await response.json();
    // dispatch(setUser(currentUser));
  }
  dispatch(disableLoader());
};
export const chageStatusLike = payload => ({
  type: CHANGE_STATUS_LIKE,
  payload,
});
export const chageStatusComment = payload => ({
  type: CHANGE_STATUS_COMMENT,
  payload,
});
export const chageStatusOld = payload => ({
  type: CHANGE_STATUS_OLD,
  payload,
});
export const setToken = (accessToken, refreshToken) => ({
  type: SET_TOKEN,
  payload: { accessToken, refreshToken },
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export const setUserInfo = userInfo => ({
  type: SET_USER_INFO,
  payload: { userInfo },
});

export const removeUserInfo = () => ({
  type: REMOVE_USER_INFO,
});

export const signUp = signUpInfo => async dispatch => {
  dispatch(enableLoader());

  try {
    const { data } = await apiSignUp(signUpInfo);
    const {
      auth: { accessToken, refreshToken },
      userInfo,
    } = data;
    dispatch(setToken(accessToken, refreshToken));
    dispatch(setUserInfo(userInfo));
  } catch (error) {
    console.log(error);
  }

  dispatch(disableLoader());
};

export const signIn = loginInfo => async dispatch => {
  dispatch(enableLoader());
  try {
    const { data } = await apiSignIn(loginInfo);
    const {
      auth: { accessToken, refreshToken },
      userInfo,
    } = data;
    dispatch(setToken(accessToken, refreshToken));
    dispatch(setUserInfo(userInfo));
  } catch (error) {
    console.log(error);
  }

  dispatch(disableLoader());
};

export const signOut = () => async (dispatch, getState) => {
  dispatch(enableLoader());
  try {
    const refreshToken = getState().user.jwt.refresh;
    const response = await apiSignOut(refreshToken);
    if (response.status === 200) {
      dispatch(removeToken());
      dispatch(removeUserInfo());
    }
  } catch (error) {
    console.log(error);
  }

  dispatch(disableLoader());
};

export const checkAuth = () => async dispatch => {
  //   const response = await fetch(endPoints.checkAuth(), {
  //     // credentials: "include",
  //   });
  //   if (response.status === 200) {
  //     const user = await response.json();
  //     dispatch(setUser(user));
  //   }
};

export const editUser = (user, history) => async (dispatch, getState) => {
  // const {
  //   user: { _id: userId },
  // } = getState();
  // dispatch(enableLoader());
  // const response = await fetch(endPoints.editUser(userId), {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   // credentials: "include",
  //   body: JSON.stringify(user),
  // });
  // if (response.status === 200) {
  //   const user = await response.json();
  //   dispatch(setUser(user));
  //   history.replace(`/users/${user._id}`);
  // } else {
  //   history.replace("/");
  // }
  // dispatch(disableLoader());
};
