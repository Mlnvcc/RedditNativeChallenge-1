import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { BottomSheet, ListItem } from "react-native-elements";

export default function Search({ route }) {
  const { data } = route.params;
  const [isVisible, setIsVisible] = useState(false);
  const [searchText, setSearchText] = useState("Title");

  const list = [
    {
      title: "Title",
      onPress: () => {
        setSearchText(list[0].title);
        setIsVisible(false);
      },
    },
    {
      title: "Tags",
      onPress: () => {
        setSearchText(list[1].title);
        setIsVisible(false);
      },
    },
    {
      title: "Users",
      onPress: () => {
        setSearchText(list[2].title);
        setIsVisible(false);
      },
    },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "#f9acac" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <View style={styles.container}>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
      >
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>

      <Button
        title="Search by:"
        onPress={() => setIsVisible(prev => !prev)}
      ></Button>

      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={searchText}
      ></TextInput>
      <Button title="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },

  input: {
    width: 200,
    height: 40,
    borderStyle: "solid",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#3949ab",
  },
});
