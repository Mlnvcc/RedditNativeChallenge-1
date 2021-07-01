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
import oneAutorPage from "../components/OneAutorPage/OneAuthorPage";
import CreateNewPost from "../components/CreatePost/CreatePost";
import AuthorList from "../components/AuthorList/AuthorList";

import Search from "../components/Search/Search";
import EditPost from "../components/EditPostForm/EditPostForm";

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
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                },
                headerTitleStyle: {
                  color: "#61dafb",
                },
                headerTintColor: "#61dafb",
              }}
            />
            <Stack.Screen
              name="Profile"
              component={UserProfileView}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                },
                headerTitleStyle: {
                  color: "#61dafb",
                },
                headerTintColor: "#61dafb",
              }}
            />

            <Stack.Screen
              name="CreatePost"
              component={CreateNewPost}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                },
                headerTitleStyle: {
                  color: "#61dafb",
                },
                headerTintColor: "#61dafb",
              }}
            />

            <Stack.Screen
              name="OnePostPage"
              component={OnePostPage}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                  color: "white",
                },
                headerTitleStyle: {
                  color: "#61dafb",
                },
                headerTintColor: "#61dafb",
              }}
            />
            <Stack.Screen
              name="DetailPage"
              component={oneAutorPage}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                  color: "white",
                },
                headerTitleStyle: {
                  color: "#61dafb",
                },
                headerTintColor: "#61dafb",
              }}
            />

            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                },
                headerTitleStyle: {
                  color: "#61dafb",
                },
                headerTintColor: "#61dafb",
              }}
            />

            <Stack.Screen
              name="EditPost"
              component={EditPost}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                },
                headerTitleStyle: {
                  color: "#e2e8f0",
                },
                headerTintColor: "#e2e8f0",
              }}
            />

            <Stack.Screen
              name="AuthorList"
              component={AuthorList}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                },
                headerTitleStyle: {
                  color: "#e2e8f0",
                },
                headerTintColor: "#e2e8f0",
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                },
                headerTitleStyle: {
                  color: "#f9fafb",
                },
                headerTintColor: "#f9fafb",
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#0f172a",
                },
                headerTitleStyle: {
                  color: "#f9fafb",
                },
                headerTintColor: "#f9fafb",
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
