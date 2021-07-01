import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Input } from "react-native-elements";
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
    }
  };

  return (
    <View style={styles.footer}>
      <View style={styles.centeredView}>
        <Input
          value={comment}
          onChangeText={text => setComment(text)}
          placeholder="Comment"
        />
        <Button
          onPress={() => {
            createComment();
          }}
          title="Sub"
        />
      </View>
    </View>
  );
};

export default AddCommentMenu;
