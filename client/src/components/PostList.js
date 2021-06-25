import React, { useEffect } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { getContent } from "../redux/actions/content";

export default function PostList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);
  const posts = useSelector(state => state.content);

  return (
    <>
      <Text>Последние посты</Text>
      <View>
        {posts.map(el => {
          return <Item key={el._id} el={el} />;
        })}
      </View>
    </>
  );
}

