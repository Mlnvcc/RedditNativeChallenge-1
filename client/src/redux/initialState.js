import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialState = {
  user: null,
  loader: false,
  content: [],
  addButton: false,
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
  const stateFromLS = retrieveData();

  return stateFromLS ? stateFromLS : initialState;
};

export default getInitState;
