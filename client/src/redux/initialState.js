import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialState = {
  user: null,
  loader: false,
};

const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("userInfo");
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};

const getInitState = () => {
  // const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  const stateFromLS = retrieveData();
  console.log(stateFromLS);
  return stateFromLS ? stateFromLS : initialState;
};

export default getInitState;
