import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { rootReducer } from "./reduce/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

const saveUserInStorage = async () => {
  try {
    const { user } = store.getState();
    await AsyncStorage.setItem("userInfo", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

store.subscribe(() => {
  saveUserInStorage();
  // console.log("Store =>", store.getState());
});

export default store;
