import apiService from "./apiService";

export const signUp = async userInfo => {
  return await apiService.post("/api/v2/auth/signup", userInfo);
};

export const signIn = async loginInfo => {
  return await apiService.post("/api/v2/auth/signin", loginInfo);
};

export const signOut = async refreshToken => {
  return await apiService.post("/api/v2/auth/signout", { refreshToken });
};

export const refreshToken = async refreshToken => {
  return await apiService.post("/api/v2/auth/refresh_token", { refreshToken });
};
