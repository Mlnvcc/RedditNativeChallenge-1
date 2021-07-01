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
      console.log("COMMENT FRONT", commentToComment);
      dispatch(createComToCom(comment));
    }
  };

  return (
    <View style={styles.footer}>
      <View style={styles.centeredView}>
        <Input
          value={commentToComment}
          onChangeText={text => setCommentToComment(text)}
          placeholder="Retry"
        />
        <Button
          onPress={() => {
            createCommentToComment();
          }}
          title="Sub"
        />
      </View>
    </View>
  );
};

export default AddReplyMenu;
