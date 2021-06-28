import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../Header/Header";
import LowerMenu from "../LowerMenu/LowerMenu";
import PostList from "../PostList/PostList";

export default function MainPage() {
  return (
    <View>
      <Header />
      <ScrollView>
        <PostList />
      </ScrollView>
      <LowerMenu />
    </View>
  );
}
