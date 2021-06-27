import "react-native-gesture-handler"; // мб нужно удалить
import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "../components/MainPage/MainPage";
import SignIn from "../components/Forms/SignIn/SignIn";
import SignUp from "../components/Forms/SignUp/SignUp";
import UserProfileView from "../components/Profile/Profile";
import Post from "../components/post/post";

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
              name="Post"
              component={Post}
              options={{ title: "Post" }}
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
