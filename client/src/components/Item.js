import React, { useEffect } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default function Item({ el }) {
  return (
    <View style={styles.div}>
      <Text>{el.title}</Text>
      <Text>{el.description}</Text>
      <Text>{el.date}</Text>
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
});
