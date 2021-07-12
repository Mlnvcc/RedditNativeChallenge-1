import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { Text } from "react-native-elements";

import { createComMain } from "../../redux/actions/content";
import styles from "./style";

const AddCommentMenu = ({ userId, postId }) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState();

  const createComment = () => {
    if (comment.trim().length > 2) {
      const post = { text: comment, autorId: userId, postId };
      dispatch(createComMain(post));
      setComment("");
    }
  };

  return (
    <View style={styles.footer}>
      <View style={styles.centeredView}>
        <TextInput
          style={{ color: "#f9fafb", width: 300, height: 50, marginTop: 8 }}
          value={comment}
          onChangeText={text => setComment(text)}
          placeholder="Comment"
        ></TextInput>
        <TouchableOpacity
          style={styles.buttonComment}
          onPress={() => {
            createComment();
          }}
        >
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCommentMenu;
