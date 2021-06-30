import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/content";
import { useNavigation } from "@react-navigation/native";
import Multer from "../Multer/Multer";
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

      <Button onPress={submtForm} style={styles.button} title="Create Post" />
      <Multer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  input: {
    height: 40,
    margin: 15,
    borderStyle: "solid",
    borderColor: "#3949ab",
    borderWidth: 2,
    borderRadius: 5,
  },

  multilineInput: {
    height: 100,
    margin: 15,
    borderStyle: "solid",
    borderColor: "#3949ab",
    borderWidth: 2,
    borderRadius: 5,
  },

  button: {
    margin: 15,
  },
});
