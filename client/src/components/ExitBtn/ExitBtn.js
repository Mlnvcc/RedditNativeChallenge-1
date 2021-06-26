import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/user.ac";

const ExitBtn = ({ stateUser }) => {
  const dispatch = useDispatch();
  const setNewUser = stateUser.setNewUser;
  const handleClickLogOut = () => {
    dispatch(signOut());
    console.log(stateUser.newUser);
    setNewUser("");
    // console.log(1234124);
  };

  return (
    <View>
      <Button
        onPress={handleClickLogOut}
        title="LogOut"
        color="#841584"
        accessibilityLabel="LogOut"
      />
    </View>
  );
};

export default ExitBtn;
