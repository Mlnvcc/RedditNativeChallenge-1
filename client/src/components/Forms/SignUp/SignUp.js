import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { signUp } from "../../../redux/actions/user.ac";
import styles from "./style";

const initialFieldsValues = {
  email: "",
  userName: "",
  password: "",
};

const SignUp = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [signUpFormFields, setSignUpFormFields] = useState(initialFieldsValues);

  const handleUserNameChange = userName => {
    setSignUpFormFields(prevSignUpFormFields => ({
      ...prevSignUpFormFields,
      userName,
    }));
  };
  const handleEmailChange = email => {
    setSignUpFormFields(prevSignUpFormFields => ({
      ...prevSignUpFormFields,
      email,
    }));
  };
  const handlePasswordChange = password => {
    setSignUpFormFields(prevSignUpFormFields => ({
      ...prevSignUpFormFields,
      password,
    }));
  };

  const loadScene = () => {
    navigation.navigate("MainPage");
  };

  const handleClickSignUp = () => {
    if (
      signUpFormFields.userName &&
      signUpFormFields.email &&
      signUpFormFields.password
    ) {
      dispatch(signUp(signUpFormFields));
      setSignUpFormFields(initialFieldsValues);
    }
  };

  const handleClickLoadLogin = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={{
          uri: "https://thumbs.gfycat.com/DenseGenerousBoutu-size_restricted.gif",
        }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          name="userName"
          style={styles.inputs}
          placeholder="Username"
          underlineColorAndroid="transparent"
          onChangeText={handleUserNameChange}
          defaultValue={signUpFormFields.userName}
        />
        <Image
          style={styles.inputIcon}
          source={{
            uri: "https://img.icons8.com/dotty/64/000000/year-of-monkey--v2.png",
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          name="email"
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={handleEmailChange}
          defaultValue={signUpFormFields.email}
        />

        <Image
          style={styles.inputIcon}
          source={{ uri: "https://img.icons8.com/nolan/40/000000/email.png" }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          name="password"
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={handlePasswordChange}
          defaultValue={signUpFormFields.password}
        />
        <Image
          style={styles.inputIcon}
          source={{ uri: "https://img.icons8.com/nolan/40/000000/key.png" }}
        />
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={handleClickSignUp}
      >
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={handleClickLoadLogin}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
