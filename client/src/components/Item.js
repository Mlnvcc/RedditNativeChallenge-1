import React, { useEffect } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { addLike } from "../redux/actions/content";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";



export default function Item({ el }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const navigation = useNavigation();

  const like = (userId, postId) => {
    dispatch(addLike(userId, postId))
 }

  return (
    <View style={styles.div}>
      <Card>
        <Card.Title style={styles.title1}>{el.title}</Card.Title>
        <Card.Divider />

        {el.content ?
          <Card.Image>
            <Text style={{ marginBottom: 10 }}>{el.content}</Text>
          </Card.Image>
          : <View></View>
        }

        <View style={styles.icons}>
          <Icon.Button
            name="thumbs-up"
            backgroundColor="gray"
            onPress={() => like(userId, el._id)}
          >
            {el.likes.length}
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
  div: {
    width: 400,
    flexDirection: "column",
    justifyContent: "space-around",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  title1: {
    fontSize: 20,
  },
});
