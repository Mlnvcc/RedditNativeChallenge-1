import React, { useEffect } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Item({ el }) {
  console.log("vot tut", el.comments.length);
  return (
    <View style={styles.div}>
      <Card>
        <Card.Title>{el.title}</Card.Title>
        <Card.Divider />
        <Card.Image>
          <Text style={{ marginBottom: 10 }}>{el.description}</Text>
        </Card.Image>
        <View style={styles.icons}>
          <Icon.Button
            name="thumbs-up"
            backgroundColor="gray"
            onPress={() => console.log("like")}
          >
            {el.likes.length}
          </Icon.Button>
          <Icon.Button
            name="comments"
            backgroundColor="gray"
            onPress={() => console.log("comment")}
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
});
