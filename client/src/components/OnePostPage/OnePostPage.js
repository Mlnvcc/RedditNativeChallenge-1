import React, { useEffect, useState } from "react";
import { Card, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createComMain, createComToCom } from "../../redux/actions/comments";
import { addLike } from "../../redux/actions/content";

export default function Post({ route }) {
  const dispatch = useDispatch();
  const el = route.params.el;
  const mainId = el._id; // НОРМАЛЬНО!!!!
  const [comment, setComment] = useState();

  const posts = useSelector(state => state.content);
  const mainPost = posts.filter(post => post._id == mainId)[0];
  const comments = mainPost.comments;
  console.log("ya tut");
  console.log("ya vot zdes", comments);
  const userId = useSelector(state => state.user.userInfo.id);
  const createComment = () => {
    if (comment.trim().length > 5) {
      const post = { text: comment, autorId: userId, postId: el._id };
      dispatch(createComMain(post));
    }
  };
  const [commentToComment, setCommentToComment] = useState();
  const createCommentToComment = commentId => {
    if (commentToComment.trim().length > 5) {
      const comment = {
        text: commentToComment,
        autorId: userId,
        commentId,
        mainId: mainId,
      };
      dispatch(createComToCom(comment));
    }
  };

  const like = (userId, postId) => {
    console.log(userId, postId);
    dispatch(addLike(userId, postId));
  };

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
              onPress={() => like(userId, el._id)}
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
      <Text style={{ alignItems: "center", justifyContent: "center" }}></Text>
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <Card style={{ height: 30 }}>
            <Card.Image /*source={"ASd"}*/>
              <Text style={{ marginBottom: 10 }}>{item.text}</Text>
            </Card.Image>
            <Text style={{ marginBottom: 1 }}>{item.date}</Text>
            <FlatList
              data={item.comments}
              renderItem={({ item }) => (
                <>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text>{item.text}</Text>
                    </View>
                    <View>
                      <Text>{item.creatorLogin}</Text>
                      <Text>{item.date}</Text>
                    </View>
                  </View>
                </>
              )}
            />
            <Input
              value={commentToComment}
              onChangeText={text => setCommentToComment(text)}
              placeholder="Текст комментария"
            />
            <Button
              onPress={() => {
                createCommentToComment(item._id);
              }}
              title="Ответить на комментарий"
            />
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
