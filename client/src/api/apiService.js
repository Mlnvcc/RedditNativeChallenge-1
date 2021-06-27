import axios from "axios";
import deviceStorage from "../asyncStorage";
import { userPersistConfig } from "../redux/reduce/userReducer";
import { refreshToken as apiRefreshToken } from "./auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiService = axios.create({
  baseURL: "http://localhost:8080",
});

const parsePersistedState = state =>
  Object.keys(state).reduce(
    (acc, key) => ({
      ...acc,
      [key]: JSON.parse(state[key]),
    }),
    {}
  );

apiService.interceptors.request.use(
  async config => {
    const userStateString = await deviceStorage.getItem("persist:user");

    let accessToken = null;

    if (userStateString) {
      accessToken = parsePersistedState(userStateString)?.jwt?.access;
      console.log(parsePersistedState(userStateString));
    }
    if (accessToken) {
      config.headers["authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

apiService.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    const userStateString = await deviceStorage.getItem("persist:user");
    let refreshToken = null;
    const userState = parsePersistedState(userStateString);
    if (userStateString) {
      refreshToken = userState?.jwt?.refresh;
    }

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
