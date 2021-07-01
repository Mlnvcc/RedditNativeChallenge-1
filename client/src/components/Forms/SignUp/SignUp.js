import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../redux/actions/user.ac";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        source={{ uri: "https://lorempixel.com/900/1400/nightlife/2/" }}
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
          source={{ uri: "https://img.icons8.com/nolan/40/000000/email.png" }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10,
    width: 300,
    backgroundColor: "transparent",
  },
  loginButton: {
    backgroundColor: "#61dafb",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  register: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 10,
  },
});
