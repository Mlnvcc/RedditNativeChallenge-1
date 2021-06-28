import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { addLike, addDislike, getContent } from "../redux/actions/content";

export default function Item({ el }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userId = user.id;
  const navigation = useNavigation();

  const like = (userId, postId) => {
    dispatch(addLike(userId, postId));
  };
  const dislike = (userId, postId) => {
    dispatch(addDislike(userId, postId));
  };

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <Card containerStyle={styles.div}>
      <View style={styles.header_post}>
        <Icon.Button name="ellipsis-v" backgroundColor="#94a3b8"></Icon.Button>
        <Text></Text>
      </View>

      <Card.Title style={styles.title1}>{el.title}</Card.Title>
      <Card.Divider style={styles.hr} />

      {el.content ? (
        <Card.Image>
          <Text style={{ marginBottom: 10 }}>{el.content}</Text>
        </Card.Image>
      ) : (
        <View></View>
      )}

      <View style={styles.icons}>
        <Icon.Button
          name="thumbs-up"
          backgroundColor="#94a3b8"
          color="#e2e8f0"
          onPress={() => like(userId, el._id)}
        >
          <Text style={styles.text}> {el.likes.length}</Text>
        </Icon.Button>

        <Icon.Button
          name="thumbs-down"
          backgroundColor="#94a3b8"
          onPress={() => dislike(userId, el._id)}
        >
          <Text style={styles.text}>{el.dislikes.length}</Text>
        </Icon.Button>

        <Icon.Button
          name="comments"
          backgroundColor="#94a3b8"
          onPress={() => navigation.navigate("OnePostPage", { el })}
        >
          <Text style={styles.text}>{el.comments.length}</Text>
        </Icon.Button>
      </View>
      <Text style={styles.text}>Created by: </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  edit_button: {
    width: 30,
    height: 40,
    backgroundColor: "gray",
  },

  hr: {
    backgroundColor: "#e2e8f0",
    height: 1.3,
  },

  div: {
    width: 300,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    backgroundColor: "#334155",
  },
  header_post: {
    flexDirection: "column",
    alignSelf: "flex-end",
    height: 20,
    width: 17,
  },
  header_title: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 25,
    marginBottom: 8,
  },
  title1: {
    fontSize: 20,
    color: "#e2e8f0",
  },
  text: {
    color: "#e2e8f0",
  },
});
