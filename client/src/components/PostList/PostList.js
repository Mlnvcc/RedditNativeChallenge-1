import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Item from "../Item";
import { getContent } from "../../redux/actions/content";
import { useNavigation } from "@react-navigation/native";
import { NavigationInjectedProps, withNavigation } from "react-navigation";

export default function PostList() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);
  const posts = useSelector(state => state.content);
  // const loadScene = () => {
  //   navigation.navigate("Profile");
  // };

  return (
    <>
      <Text>Последние посты</Text>

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Post", {
                el: item,
              });
            }}
          >
            <Item el={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
}
