import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Text } from "react-native-elements";
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

const AddReplyMenu = ({ userId, postId, fathercomment }) => {
  const dispatch = useDispatch();
  console.log("BATYANAFRoNTE", fathercomment);
  const [commentToComment, setCommentToComment] = useState();

  const createCommentToComment = () => {
    if (commentToComment.trim().length > 5) {
      const comment = {
        text: commentToComment,
        autorId: userId,
        postId,
        fathercomment,
      };
      dispatch(createComToCom(comment));
      setCommentToComment("");
    }
  };

  return (
    <View style={styles.footer}>
      <View style={styles.centeredView}>
        <TextInput
          style={{ color: "#f9fafb", width: 300, height: 50, marginTop: 8 }}
          value={commentToComment}
          onChangeText={text => setCommentToComment(text)}
          placeholder="Answer"
        ></TextInput>
        <TouchableOpacity
          style={styles.buttonComment}
          onPress={() => {
            createCommentToComment();
          }}
          title="Sub"
        >
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddReplyMenu;
