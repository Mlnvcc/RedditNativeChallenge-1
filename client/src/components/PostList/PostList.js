import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  TouchableOpacity,
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
  const changeVis = () => {
    navigation.navigate("Post");
  };
  return (
    <>
      <Text>Последние посты</Text>
      <ScrollView>
        {posts.map(el => {
          return (
            <View>
              <Button
                title="Go to Details"
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate("Post", {
                    id: el._id,
                  });
                }}
              />
              <Item key={el._id} el={el} />
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}
