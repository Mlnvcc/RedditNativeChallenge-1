import {
  REMOVE_ACCESS_TOKEN,
  SET_ACCESS_TOKEN,
  SET_USER_INFO,
  REMOVE_USER_INFO,
} from "../types/userTypes";
import * as endPoints from "../../config/endPoints";
import { disableLoader, enableLoader } from "./loader.ac";
import { signUp as apiSignUp, signIn as apiSignIn } from "../../api/auth";

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

export const setAccessToken = accessToken => ({
  type: SET_ACCESS_TOKEN,
  payload: { accessToken },
});

export const removeAccessToken = () => ({
  type: REMOVE_ACCESS_TOKEN,
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
      auth: { accessToken },
      userInfo,
    } = data;
    dispatch(setAccessToken(accessToken));
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
      auth: { accessToken },
      userInfo,
    } = data;
    dispatch(setAccessToken(accessToken));
    dispatch(setUserInfo(userInfo));
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
