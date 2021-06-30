import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../Header/Header";
import LowerMenu from "../LowerMenu/LowerMenu";
import PostList from "../PostList/PostList";

const MainPage = () => {
  return (
    <View style={{ backgroundColor: "#334155" }}>
      <Header />
      <PostList />
      <LowerMenu />
    </View>
  );
};

export default MainPage;
