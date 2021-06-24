import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header/Header";
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
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
});
