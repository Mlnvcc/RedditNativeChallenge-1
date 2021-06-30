import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Card } from "react-native-elements";

export default function AuthorList({ el }) {
  const curUser = el;
  console.log("--->", curUser);
  if (curUser.title) return <></>;

  return (
    <Card containerStyle={styles.div}>
      <Card.Title style={styles.title1}>{curUser.userName}</Card.Title>
      <Text style={styles.text}>Subscribers: {curUser.subscribers.length}</Text>
    </Card>
  );
}
const styles = StyleSheet.create({
  div: {
    width: 300,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#111827",
  },

  title1: {
    fontSize: 20,
    color: "#f9fafb",
  },

  text: {
    color: "#f9fafb",
  },
});
