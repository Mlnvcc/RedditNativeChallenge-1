import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-elements";

import styles from "./style";

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
