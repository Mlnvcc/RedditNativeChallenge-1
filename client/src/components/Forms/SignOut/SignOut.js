import { useDispatch } from "react-redux";
import React from "react";
import {
  removeAccessToken,
  removeUserInfo,
} from "../../../redux/actions/user.ac";
import { View, Button } from "react-native";

const SignOut = () => {
  const dispatch = useDispatch();

  const signOutFunc = () => {
    dispatch(removeAccessToken());
    dispatch(removeUserInfo());
  };

  return (
    <View>
      <Button onPress={signOutFunc} title="LogOut" />
    </View>
  );
};

export default SignOut;
