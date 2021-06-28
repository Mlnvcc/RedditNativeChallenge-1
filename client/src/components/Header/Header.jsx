import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const [formValue, setFormValue] = useState("");

  const navigation = useNavigation();

  const loadScene = () => {
    navigation.navigate("Profile");
  };

  const loadSearcjScene = () => {
    navigation.navigate("Search", { data: formValue });
  };

  const submitForm = () => {
    if (formValue.trim()) {
      loadSearcjScene();
      setFormValue("");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={loadScene}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.frankerfacez.com/avatar/twitch/80339713",
          }}
        />
      </TouchableOpacity>

      <View style={styles.form}>
        <TextInput
          onChangeText={text => setFormValue(text)}
          value={formValue}
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Write here..."
        ></TextInput>

        <TouchableOpacity onPress={submitForm} style={styles.button}>
          <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 4,
    backgroundColor: "#1e293b",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#e2e8f0",
    margin: 3,
    fontSize: 15,
  },

  container: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#e2e8f0",
  },

  form: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    padding: 7,
    width: 200,
    height: 40,
    borderStyle: "solid",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#e2e8f0",
    color: "#e2e8f0",
    backgroundColor: "#1e293b",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#e2e8f0",
  },
  hr: {
    backgroundColor: "#e2e8f0",
    height: 1.3,
  },
});
