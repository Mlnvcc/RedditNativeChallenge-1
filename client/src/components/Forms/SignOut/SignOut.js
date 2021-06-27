import { useDispatch } from "react-redux";
import React from "react";
import { View, Button } from "react-native";

import { signOut as signOutAC } from "../../../redux/actions/user.ac";

const SignOut = () => {
  const dispatch = useDispatch();

  const signOutFunc = () => {
    dispatch(signOutAC());
  };

  return (
    <View>
      <Button onPress={signOutFunc} title="LogOut" />
    </View>
  );
};

export default SignOut;
