import { rootReducer } from "./reduce/rootReducer";
import thunk from "redux-thunk";
import getInitState from "./initialState";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AsyncStorage from "@react-native-async-storage/async-storage";

const store = createStore(
  rootReducer,
  getInitState(),
  composeWithDevTools(applyMiddleware(thunk))
);

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
  console.log("Store =>", store.getState());
});

export default store;
