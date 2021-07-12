import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Item from "../Item/Item";
import { getContent } from "../../redux/actions/content";
import styles from "./style";

export default function PostList() {
  const navigation = useNavigation();

  const posts = useSelector(state => state.content.content);
  const loader = useSelector(state => state.content.loader);
  const dispatch = useDispatch();

  const status = useSelector(state => state.user.statusSearch);

  if (status.likes) {
    posts.sort((a, b) => b.likes.length - a.likes.length);
  }
  if (status.comments) {
    posts.sort((a, b) => b.comments.length - a.comments.length);
  }
  if (status.old) {
    posts.sort((a, b) => a.dateNumber - b.dateNumber);
  }

  useEffect(() => {
    dispatch(getContent());
  }, []);

  return (
    <>
      {loader ? (
        <Text style={{ color: "#f9fafb", fontSize: 17 }}>LOADING ...</Text>
      ) : posts.length ? (
        <View style={styles.container}>
          <Text style={{ color: "#f9fafb", fontSize: 17 }}>Last posts:</Text>

          <FlatList
            style={{ height: "80ex" }}
            data={posts}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("OnePostPage", {
                    el: item,
                  });
                }}
              >
                <Item el={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
