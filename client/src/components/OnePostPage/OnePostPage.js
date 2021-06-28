import React, { useEffect, useState } from "react";
import { Card, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createComMain } from "../../redux/actions/comments";
import { addLike, addDislike, getContent } from "../../redux/actions/content";

export default function Post({ route }) {
  const dispatch = useDispatch();

  const mainId = route.params.el._id;
  const [comment, setComment] = useState();
  const posts = useSelector(state => state.content);
  const mainPost = posts.filter(post => post._id == mainId)[0];

  const comments = mainPost.comments;
  const likes = mainPost.likes;
  const userId = useSelector(state => state.user.id);
  const createComment = () => {
    if (comment.trim().length > 5) {
      const post = { text: comment, autorId: userId, postId: mainPost._id };
      dispatch(createComMain(post));
    }
  };

  const like = (userId, postId) => {
    dispatch(addLike(userId, postId));
  };
  const dislike = (userId, postId) => {
    dispatch(addDislike(userId, postId));
  };

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <>
      <View>
        <Card>
          <Card.Title>{mainPost.title}</Card.Title>
          <Card.Divider />
          <Card.Image>
            <Text style={{ marginBottom: 10 }}>{mainPost.description}</Text>
          </Card.Image>
          <View style={styles.icons}>
            <Icon.Button
              name="thumbs-up"
              thumbs-down
              backgroundColor="gray"
              onPress={() => like(userId, mainPost._id)}
            >
              {likes.length}
            </Icon.Button>
            <Icon.Button
              name="thumbs-down"
              backgroundColor="gray"
              onPress={() => dislike(userId, mainPost._id)}
            >
              {mainPost.dislikes.length}
            </Icon.Button>
            <Icon.Button
              name="comments"
              backgroundColor="gray"
              onPress={() => console.log("comment")}
            >
              {mainPost.comments.length}
            </Icon.Button>
            <Icon.Button
              name="ellipsis-h"
              backgroundColor="gray"
              onPress={() => console.log("comment")}
            ></Icon.Button>
          </View>
        </Card>
      </View>
      <Text style={{ alignItems: "center", justifyContent: "center" }}></Text>
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
