import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
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

        <Button onPress={submitForm} title="Search" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
    borderColor: "#3949ab",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#3949ab",
  },
});
