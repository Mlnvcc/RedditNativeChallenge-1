import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { StyleSheet } from "react-native";
import Navigate from "./src/navigation/AppNavigator";
import { View, Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <Navigate style={styles.container} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
