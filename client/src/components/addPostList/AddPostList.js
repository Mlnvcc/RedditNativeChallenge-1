import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/actions/content";

export default function AddPostList() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const submtForm = () => {
    const post = {
      title: title,
      description: description,
    };
    dispatch(createPost(post));
  };
  const posts = useSelector(state => state.content);

  return (
    <>
      <View style={styles.div}>
        <Text style={styles.h1}>Добавление поста</Text>
        <Text style={styles.h2}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Text style={styles.h2}>Description</Text>
        <TextInput
          style={styles.textArea}
          placeholder=""
          value={description}
          onChangeText={text => setdescription(text)}
        />
        <TextInput />
        <TouchableOpacity onPress={submtForm}>
          <Text style={styles.button}>Создать пост</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  div: {
    width: 800,
    height: 800,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#d7d1e8",
    borderRadius: 3,
  },
  h1: {
    fontSize: 35,
    color: "red",
    paddingTop: 10,
    paddingBottom: 5,
  },
  h2: {
    fontSize: 25,
    color: "blue",
    paddingTop: 10,
    paddingBottom: 5,
  },
  input: {
    height: 40,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
  },
  // textAreaContainer: {
  //   borderColor: "gray",
  //   borderWidth: 1,
  //   padding: 5
  // },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
  },
  button: {
    fontSize: 30,
    color: "red",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#877ba8",
    borderRadius: 10,
  },
});
