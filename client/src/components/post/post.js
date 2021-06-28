import React from "react";
import { Text } from "react-native";

export default function Post({ route }) {
  const id = route.params.id;

  return <Text>{id}</Text>;
}
