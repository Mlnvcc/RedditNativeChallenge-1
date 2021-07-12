import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { signIn } from "../../../redux/actions/user.ac";
import styles from "./style";

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    const userInfo = {
      email,
      password,
    };

    if (userInfo.email && userInfo.password) {
      dispatch(signIn(userInfo));

      setEmail("");
      setPassword("");
    }
  };

  const handleClickLoadSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={{
          uri: "https://i.pinimg.com/originals/f3/36/f4/f336f483d30551426051ce690b8d2d68.gif",
        }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={email => setEmail(email)}
          defaultValue={email}
        />
        <Image
          style={styles.inputIcon}
          source={{ uri: "https://img.icons8.com/nolan/40/000000/email.png" }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={password => setPassword(password)}
          defaultValue={password}
        />
        <Image
          style={styles.inputIcon}
          source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
        />
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={handleClick}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={handleClickLoadSignUp}
      >
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
