import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { signOut } from "../../../redux/actions/user.ac";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignOut = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  // const history = useHistory();
  const signOutFunc = () => {
    dispatch(signOut());

    navigation.navigate("SignUp");
  };

  // useEffect(() => {
  //   signOutFunc();
  //   // history.push("/");
  // }, []);

  return (
    <View>
      <Button onPress={() => signOutFunc()} title="LogOut" />
    </View>
  );
};

export default SignOut;
