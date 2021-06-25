import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header/Header";
import LowerMenu from "./src/components/LowerMenu/LowerMenu";
import Navigate from "./src/navigation/AppNavigator";

export default function App() {
  return <Navigate style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
