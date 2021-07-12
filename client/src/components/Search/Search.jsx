import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { BottomSheet, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { searchInit } from "../../redux/actions/search";
import Item from "../Item/Item";
import AuthorList from "../AuthorList/AuthorList";
import styles from "./style";

export default function Search({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { data } = route.params;

  let posts = useSelector(state => state.search);

  const [isVisible, setIsVisible] = useState(false);
  const [searchTag, setSearchTag] = useState("Title");
  const [formData, setFormData] = useState("");

  const serachingFunc = () => {
    dispatch(searchInit(formData, searchTag));
  };

  const list = [
    {
      title: "Title",
      containerStyle: { backgroundColor: "#1f2937" },
      titleStyle: { color: "#f9fafb" },
      onPress: () => {
        setSearchTag(list[0].title);
        setIsVisible(false);
      },
    },
    {
      title: "Tags",
      containerStyle: { backgroundColor: "#1f2937" },
      titleStyle: { color: "#f9fafb" },
      onPress: () => {
        setSearchTag(list[1].title);
        setIsVisible(false);
      },
    },
    {
      title: "Users",
      containerStyle: { backgroundColor: "#1f2937" },
      titleStyle: { color: "#f9fafb" },
      onPress: () => {
        setSearchTag(list[2].title);
        setIsVisible(false);
      },
    },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "#543333" },
      titleStyle: { color: "#f9fafb" },
      onPress: () => {
        setSearchTag(list[3].title);
        setIsVisible(false);
      },
    },
  ];

  useEffect(() => {
    posts = [];
  }, [searchTag]);

  useEffect(() => {
    dispatch(searchInit(data, searchTag));
  }, []);

  return (
    <View style={styles.container}>
      <BottomSheet isVisible={isVisible}>
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsVisible(prev => !prev)}
      >
        <Text style={styles.text}>Search by:</Text>
      </TouchableOpacity>

      <TextInput
        onChangeText={text => setFormData(text)}
        value={formData}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={searchTag}
        // placeholderTextColor="#cff1f9"
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={() => serachingFunc()}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>

      {posts.length && searchTag !== "Users" ? (
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
        <Text style={styles.text}>Nothing was found :(</Text>
      )}

      {posts.length && searchTag === "Users" ? (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DetailPage", {
                  el: item,
                });
              }}
            >
              <AuthorList el={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text></Text>
      )}
    </View>
  );
}
