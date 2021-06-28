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

      <Button title="Search" onPress={() => serachingFunc()} />

      {posts.length ?
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
        : <Text>Nothing was found</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  myContainer: {
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
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    fontSize: 13,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: "#EEEEEE",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: "#888",
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: "row",
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
