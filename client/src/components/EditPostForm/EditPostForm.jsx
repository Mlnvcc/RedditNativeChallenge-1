import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { editPost } from "../../redux/actions/content";
import { useNavigation } from "@react-navigation/native";

export default function EditPost({ route }) {
  const { data } = route.params;
  const dispatch = useDispatch();
  const [inputTitle, setInputTitle] = useState(data.title);
  const [inputDescription, setInputDescription] = useState(data.description);
  const navigation = useNavigation();

  const editPostFunction = id => {
    if (inputTitle.trim() && inputDescription.trim()) {
      const post = {
        _id: data._id,
        title: inputTitle,
        description: inputDescription,
      };
      dispatch(editPost(post));
      navigation.navigate("MainPage");
    }
    navigation.navigate("MainPage");
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={text => setInputTitle(text)}
          style={styles.input}
          value={inputTitle}
          placeholder={data.title}
        />
      </View>
      <View>
        <TextInput
          onChangeText={text => setInputDescription(text)}
          multiline={true}
          style={styles.multilineInput}
          value={inputDescription}
          placeholder={data.description}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.updateButton]}
        onPress={() => editPostFunction(data._id)}
      >
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    backgroundColor: "#111827",
  },

  input: {
    fontSize: 15,
    paddingBottom: 7,
    width: 240,
    height: 50,
    borderStyle: "solid",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#f9fafb",
    color: "#f9fafb",
    backgroundColor: "#1f2937",
  },

  multilineInput: {
    fontSize: 15,
    height: 100,
    width: 240,
    margin: 15,
    color: "#f9fafb",
    borderStyle: "solid",
    borderColor: "#f9fafb",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#1f2937",
  },

  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  updateButton: {
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
  updateText: {
    color: "white",
  },
});
