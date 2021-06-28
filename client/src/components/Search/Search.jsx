import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import Item from "../Item";
import { BottomSheet, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { searchInit } from "../../redux/actions/search";

export default function Search({ route }) {
  const { data } = route.params;
  const posts = useSelector(state => state.search);

  const [isVisible, setIsVisible] = useState(false);
  const [searchTag, setSearchTag] = useState("Title");
  const [formData, setFormData] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchInit(data, searchTag));
  }, []);

  const serachingFunc = () => {
    console.log(formData, searchTag);
    dispatch(searchInit(formData, searchTag));
  };

  const list = [
    {
      title: "Title",
      onPress: () => {
        setSearchTag(list[0].title);
        setIsVisible(false);
      },
    },
    {
      title: "Tags",
      onPress: () => {
        setSearchTag(list[1].title);
        setIsVisible(false);
      },
    },
    {
      title: "Users",
      onPress: () => {
        setSearchTag(list[2].title);
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
        onChangeText={text => setFormData(text)}
        value={formData}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={searchTag}
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={() => serachingFunc()}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>

      {posts.length ? (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OnePostPage", {
                  el: item,
                });
              }}
            >
              <Item el={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Nothing was found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 4,
    backgroundColor: "#1e293b",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#e2e8f0",
    margin: 8,
    fontSize: 15,
  },

  myContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },

  input: {
    margin: 5,
    width: 200,
    height: 40,
    borderStyle: "solid",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#e2e8f0",
    color: "#e2e8f0",
    backgroundColor: "#1e293b",
  },
  container: {
    backgroundColor: "#334155",
    alignItems: "center",
    flex: 1,
    fontSize: 13,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
});
