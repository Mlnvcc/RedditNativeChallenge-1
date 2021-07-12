import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { createPost } from "../../redux/actions/content";

import Multer from "../Multer/Multer";
import styles from "./style";

export default function CreateNewPost() {
  const [image, setImage] = useState(null);
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
  const [url, setUrl] = useState("");

  const submtForm = () => {
    if (title.trim() && description.trim()) {
      const allTags = tags.split("#");
      allTags.forEach((el, index) => {
        allTags[index] = allTags[index].trim().toLowerCase();
      });
      const post = {
        author: userId,
        title,
        description,
        content: url,
        tags: allTags,
        uri: image?.toString(),
      };

      if (post.author) {
        dispatch(createPost(post));
      }

      setTitle("");
      setDescription("");
      setUrl("");
      setTags("");
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

      {image && <Image source={{ uri: image }} style={{ width: 200 }} />}

      <TextInput
        onChangeText={text => setTags(text)}
        value={tags}
        style={styles.input}
        placeholder="Put some tags separated by ' # '"
      />

      <Multer setImage={setImage} />

      <TouchableOpacity style={styles.button} onPress={submtForm}>
        <Text style={styles.text}>Create Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
