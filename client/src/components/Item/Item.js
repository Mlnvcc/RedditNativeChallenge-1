import React, { useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";

import { View, Text, Image } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { addLike, addDislike, getContent } from "../../redux/actions/content";

export default function Item({ el }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const navigation = useNavigation();

  const like = (userId, postId) => {
    dispatch(addLike(userId, postId));
  };
  const dislike = (userId, postId) => {
    dispatch(addDislike(userId, postId));
  };

  // const posts = useSelector(state => state.content);

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <View style={styles.div}>
      <View style={styles.header_post}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://cdn.frankerfacez.com/avatar/twitch/80339713",
          }}
        />
        <View style={styles.header_title}>
          <Text style={styles.userInfo}>Big Floppa</Text>
        </View>
        <Icon.Button name="ellipsis-v" backgroundColor="gray"></Icon.Button>
      </View>
      <Card>
        <Card.Title style={styles.title1}>{el.title}</Card.Title>
        <Card.Divider />

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
            backgroundColor="gray"
            onPress={() => like(userId, el._id)}
          >
            {el.likes.length}
          </Icon.Button>
          <Icon.Button
            name="thumbs-down"
            backgroundColor="gray"
            onPress={() => dislike(userId, el._id)}
          >
            {el.dislikes.length}
          </Icon.Button>
          <Icon.Button
            name="comments"
            backgroundColor="gray"
            onPress={() => navigation.navigate("OnePostPage", { el })}
          >
            {el.comments.length}
          </Icon.Button>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  edit_button: {
    width: 30,
    height: 40,
    backgroundColor: "gray",
  },
  div: {
    width: 400,
    flexDirection: "column",
    justifyContent: "space-around",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },
  header_post: {
    height: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_title: {
    flex: 1,
    justifyContent: "center",
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  title1: {
    fontSize: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
});
