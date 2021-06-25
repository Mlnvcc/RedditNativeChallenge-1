import "react-native-gesture-handler"; // мб нужно удалить
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "../components/MainPage/MainPage";
import UserProfileView from "../components/Profile/Profile";
import Item from "../components/Item";
import Post from "../components/post/post";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ title: "Main Page" }}
        />
        <Stack.Screen
          name="Profile"
          component={UserProfileView}
          options={{ title: "Your profile" }}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{ title: "Your profile" }}
          el={"qweqew"}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
