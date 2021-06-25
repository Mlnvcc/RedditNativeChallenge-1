import React from "react";
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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from "../../../redux/actions/user.ac";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation(); // для перехода на мэин страницу
  const loadScene = () => {
    navigation.navigate("MainPage");
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    const userInfo = {
      userName,
      email,
      password,
    };

    if (userInfo.userName && userInfo.email && userInfo.password) {
      dispatch(signUp(userInfo));
      setUserName("");
      setEmail("");
      setPassword("");
      loadScene();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={{ uri: "https://lorempixel.com/900/1400/nightlife/2/" }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Username"
          underlineColorAndroid="transparent"
          onChangeText={userName => setUserName(userName)}
          defaultValue={userName}
        />
        <Image
          style={styles.inputIcon}
          source={{ uri: "https://img.icons8.com/nolan/40/000000/email.png" }}
        />
      </View>
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

      {/* <TouchableOpacity style={styles.btnForgotPassword}>
        <Text style={styles.btnText}>Forgot your password?</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={handleClick}
      >
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
        <View style={styles.socialButtonContent}>
          <Image
            style={styles.icon}
            source={{ uri: "https://png.icons8.com/google/androidL/40/FFFFFF" }}
          />
          <Text style={styles.loginText}>Sign in with google</Text>
        </View>
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.register} onPress={handleClick}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity> */}
      {/* <TextInput
        style={styles.inputs}
        placeholder="Enter username..."
        onChangeText={userName => setUserName(userName)}
        defaultValue={userName}
      />
      <TextInput
        keyboardType="email-address"
        style={styles.inputs}
        placeholder="Enter email..."
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      />
      <TextInput
        secureTextEntry
        style={styles.inputs}
        placeholder="Enter password..."
        onChangeText={password => setPassword(password)}
        defaultValue={password}
      />

      <Button
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={handleClick}
        title="SignUp"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
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
    backgroundColor: "#00b5ec",

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
