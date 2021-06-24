import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header/Header";
import LowerMenu from "./src/components/LowerMenu/LowerMenu";
import PostList from "./src/components/PostList";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
        <PostList />

        <LowerMenu />
      </View>
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
