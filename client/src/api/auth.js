import apiService from "./apiService";

export const signUp = userInfo => {
  return apiService.post("/api/v2/auth/signup", userInfo);
};

export const signIn = loginInfo => {
  return apiService.post("/api/v2/auth/signin", loginInfo);
};
