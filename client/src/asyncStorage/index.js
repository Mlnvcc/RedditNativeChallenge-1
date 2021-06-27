import AsyncStorage from "@react-native-async-storage/async-storage";

const deviceStorage = {
  saveItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(`AsyncStorage error: ${error}`);
    }
  },
  getItem: async key => {
    try {
      const item = await AsyncStorage.getItem(key);
      return JSON.parse(item);
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
  mergeItem: async (key, newValue) => {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(`AsyncStorage error: ${error}`);
    }
  },
};

export default deviceStorage;
