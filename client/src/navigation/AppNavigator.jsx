import "react-native-gesture-handler"; // мб нужно удалить
import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainPage from "../components/MainPage/MainPage";
import SignIn from "../components/Forms/SignIn/SignIn";
import SignUp from "../components/Forms/SignUp/SignUp";
import UserProfileView from "../components/Profile/Profile";
import OnePostPage from "../components/OnePostPage/OnePostPage";
import CreateNewPost from "../components/CreatePost/CreatePost";
import Search from "../components/Search/Search";

const Stack = createStackNavigator();

const Navigate = () => {
  const isUserAuthenticated = useSelector(state => state.user.userInfo);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserAuthenticated ? (
          <>
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
              name="CreatePost"
              component={CreateNewPost}
              options={{ title: "Add new Post" }}
            />

            <Stack.Screen
              name="OnePostPage"
              component={OnePostPage}
              options={{ title: "Post" }}
            />

            <Stack.Screen
              name="Search"
              component={Search}
              options={{ title: "Search" }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ title: "Login Page" }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: "Registration" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
