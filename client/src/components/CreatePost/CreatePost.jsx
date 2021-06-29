import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/content";
import { useNavigation } from "@react-navigation/native";

export default function CreateNewPost() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userId = user.userInfo.id;

  const navigation = useNavigation();

  const loadScene = () => {
    navigation.navigate("MainPage");
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const submtForm = () => {
    if (title.trim() && description.trim()) {
      const allTags = tags.split("#");
      allTags.forEach((el, index) => {
        allTags[index] = allTags[index].trim().toLowerCase();
      });
      const post = {
        author: userId,
        authorUsername: user.userInfo.userName,
        title: title,
        description: description,
        tags: allTags,
      };
      setTitle("");
      setDescription("");
      setTags("");
      dispatch(createPost(post));
      loadScene();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={text => setTitle(text)}
        value={title}
        style={styles.input}
        placeholder="Title"
      />
      <TextInput
        onChangeText={text => setDescription(text)}
        value={description}
        style={styles.multilineInput}
        multiline={true}
        placeholder="Description"
      />

      <TextInput
        onChangeText={text => setTags(text)}
        value={tags}
        style={styles.input}
        placeholder="Put some tags separated by ' # '"
      />

      <TouchableOpacity style={styles.button} onPress={submtForm}>
        <Text style={styles.text}>Create Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    backgroundColor: "#1e293b",
  },

  input: {
    fontSize: 15,
    paddingBottom: 7,
    width: 240,
    height: 50,
    borderStyle: "solid",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#e2e8f0",
    color: "#e2e8f0",
    backgroundColor: "#334155",
  },

  multilineInput: {
    fontSize: 15,
    height: 100,
    width: 240,
    margin: 15,
    color: "#e2e8f0",
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#334155",
  },

  button: {
    margin: 15,
    marginHorizontal: 4,
    backgroundColor: "#475569",
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
    fontSize: 20,
  },
});
