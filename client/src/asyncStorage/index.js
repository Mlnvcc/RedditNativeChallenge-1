import AsyncStorage from "@react-native-async-storage/async-storage";

const deviceStorage = {
  saveItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(`AsyncStorage error: ${error}`);
    }
  },
  getValue: async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log(`AsyncStorage error: ${error}`);
    }
  },
  removeItem: async key => {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(`AsyncStorage error: ${error}`);
    }
  },
};

export default deviceStorage;
