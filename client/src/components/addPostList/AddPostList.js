import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch } from "react-redux";

import { createPost } from "../../redux/actions/content";
import styles from "./style";

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
