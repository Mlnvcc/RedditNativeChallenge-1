import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, ListItem, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { createPost } from "../../redux/actions/content";
import { useDispatch, useSelector } from "react-redux";
import { createComMain } from "../../redux/actions/comments";
export default function Post({ route }) {
  const dispatch = useDispatch();
  const el = route.params.el;
  const mainId = el._id;
  console.log(el._id);
  const [comment, setComment] = useState();
  const posts = useSelector(state => state.content);
  const mainPost = posts.filter(post => post._id == mainId)[0];
  const comments = mainPost.comments;
  const userId = useSelector(state => state.user.id);
  const createComment = () => {
    const post = { text: comment, autorId: userId, postId: el._id };
    dispatch(createComMain(post));
  };

  console.log("ya tut", comments);
  return (
    <>
      <View>
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
              {el.likes.length}
            </Icon.Button>
          </View>
        </Card>
      </View>

      {el.comments.length == 0 ? (
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          Ваш комментарий будет первым
        </Text>
      ) : (
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <Card>
              <Card.Image /*source={"ASd"}*/>
                <Text style={{ marginBottom: 10 }}>{item.text}</Text>
              </Card.Image>
            </Card>
          )}
          keyExtractor={item => item.id}
        />
      )}
      <Input
        value={comment}
        onChangeText={text => setComment(text)}
        placeholder="Текст комментария"
      />
      <Button
        onPress={() => {
          createComment();
        }}
        title="Отправить комментарий"
      />
    </>
  );
}

const styles = StyleSheet.create({
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
