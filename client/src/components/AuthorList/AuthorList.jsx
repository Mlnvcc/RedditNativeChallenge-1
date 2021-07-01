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
  if (curUser.title) return <></>;

  return (
    <Card containerStyle={styles.div}>
      <View style={styles.firstContainer}>
        <Image
          style={styles.image}
          source={{
            uri: el.uri,
          }}
        />
        <Card.Title style={styles.title1}>{curUser.userName}</Card.Title>
      </View>
      <Text style={styles.text}>Subscribers: {curUser.subscribers.length}</Text>
    </Card>
  );
}
const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#61dafb",
    marginBottom: 10,
  },

  div: {
    width: 300,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#111827",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#61dafb",
  },

  firstContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  title1: {
    fontSize: 20,
    color: "#f9fafb",
  },

  text: {
    color: "#f9fafb",
  },
});
