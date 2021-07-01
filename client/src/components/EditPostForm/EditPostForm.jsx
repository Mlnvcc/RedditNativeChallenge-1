import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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
      navigation.navigate("MainPage")
    }
    navigation.navigate("MainPage")
  };

  return (
    <View>
         <View>
        <TextInput onChangeText={text => setInputTitle(text)} value={inputTitle} placeholder={data.title}/>
        </View>
        <View>
          <TextInput onChangeText={text => setInputDescription(text)} value={inputDescription} style={{ marginBottom: 10 }}
            placeholder={data.description}></TextInput>
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.updateButton]}
          onPress={() => editPostFunction(data._id)}
        >
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
