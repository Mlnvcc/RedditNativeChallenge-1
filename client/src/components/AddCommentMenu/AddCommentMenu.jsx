import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Text } from "react-native-elements";
import Header from "../Header/Header";
import LowerMenu from "../LowerMenu/LowerMenu";
import PostList from "../PostList/PostList";
import {
  addLike,
  addDislike,
  getContent,
  createComMain,
  createComToCom,
} from "../../redux/actions/content";

import styles from "./style";

const AddCommentMenu = ({ userId, postId }) => {
  const dispatch = useDispatch();

  // const [commentToComment, setCommentToComment] = useState();
  const [comment, setComment] = useState();

  const createComment = () => {
    if (comment.trim().length > 5) {
      const post = { text: comment, autorId: userId, postId };
      dispatch(createComMain(post));
      setComment("");
    }
  };

  return (
    <View style={styles.footer}>
      <View style={styles.centeredView}>
        <TextInput
          style={{ color: "#f9fafb", width: 300, height: 50 }}
          value={comment}
          onChangeText={text => setComment(text)}
          placeholder="Comment"
        ></TextInput>
        <TouchableOpacity
          style={styles.buttonComment}
          onPress={() => {
            createComment();
          }}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCommentMenu;
