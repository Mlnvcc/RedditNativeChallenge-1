import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/content";
import { useNavigation } from "@react-navigation/native";
import Multer from "../Multer/Multer";

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
      setTitle("");
      setDescription("");
      setUrl("");
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
      // placeholderTextColor="#cff1f9"
      />
      <TextInput
        onChangeText={text => setDescription(text)}
        value={description}
        style={styles.multilineInput}
        multiline={true}
        placeholder="Description"
      // placeholderTextColor="#cff1f9"
      />

      <TextInput
        onChangeText={url => setUrl(url)}
        value={url}
        style={styles.multilineInput}
        multiline={true}
        placeholder="Url"
      // placeholderTextColor="#cff1f9"
      />
      {image && <Image source={{ uri: image }} style={{ width: 200 }} />}

      <TextInput
        onChangeText={text => setTags(text)}
        value={tags}
        style={styles.input}
        placeholder="Put some tags separated by ' # '"
      // placeholderTextColor="#cff1f9"
      />

      <Multer setImage={setImage} />

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

  button: {
    margin: 5,
    marginHorizontal: 4,
    backgroundColor: "#475569",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#f9fafb",
    margin: 3,
    fontSize: 20,
  },
});
