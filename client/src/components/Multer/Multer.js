import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Multer({ setImage }) {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={pickImage}>
      <Text style={styles.text}>Pick an image from camera roll</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "#f9fafb",
    margin: 3,
    fontSize: 20,
  },

  button: {
    margin: 15,
    marginHorizontal: 4,
    backgroundColor: "#475569",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
  },
});
