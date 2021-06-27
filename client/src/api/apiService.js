import axios from "axios";
import deviceStorage from "../asyncStorage";
import { userPersistConfig } from "../redux/reduce/userReducer";
import { refreshToken as apiRefreshToken } from "./auth";

const apiService = axios.create({
  baseURL: "http://localhost:8080",
});

apiService.interceptors.request.use(
  config => {
    const userState = deviceStorage.getItem("user");
    const accessToken = userState?.jwt?.access;
    if (accessToken) {
      config.headers["authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

apiService.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    const userState = deviceStorage.getItem("user");
    const refreshToken = userState?.jwt?.refresh;

    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return apiRefreshToken(refreshToken).then(response => {
        if (response.status === 200) {
          deviceStorage.mergeItem("user", {
            ...userState,
            jwt: { ...userState.jwt, access: response.data.accessToken },
          });
          return apiService(originalRequest);
        }
      });
    }
  }
);

export default apiService;
