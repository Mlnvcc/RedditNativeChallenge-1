import "react-native-gesture-handler"; // мб нужно удалить
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "../components/MainPage/MainPage";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="PostList"
          component={Item}
          options={{ title: "PostList" }}
        /> */}
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ title: "Main Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
