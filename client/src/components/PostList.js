import React, { useEffect } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getContent } from "../redux/types/content";

export default function PostList() {
  const state = useSelector(state => state);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <View>
      <Text> qu qu </Text>
    </View>
  );
}
