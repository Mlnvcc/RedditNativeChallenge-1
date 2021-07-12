import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { editPost } from "../../redux/actions/content";
import styles from "./style";

export default function EditPost({ route }) {
  const { data } = route.params;
  const dispatch = useDispatch();
  const [inputTitle, setInputTitle] = useState(data.title);
  const [inputDescription, setInputDescription] = useState(data.description);
  const navigation = useNavigation();

  const editPostFunction = () => {
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
