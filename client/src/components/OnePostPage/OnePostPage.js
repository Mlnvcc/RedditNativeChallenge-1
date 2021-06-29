import React, { useEffect, useState } from "react";
import { Card, Button, Input, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addLike, addDislike, getContent } from "../../redux/actions/content";
import { createComMain, createComToCom } from "../../redux/actions/comments";

export default function Post({ route }) {
  const dispatch = useDispatch();

  const mainId = route.params.el._id;
  const [comment, setComment] = useState();

  const posts = useSelector(state => state.content);
  const mainPost = posts.filter(post => post._id == mainId)[0];

  const comments = mainPost.comments;
  const likes = mainPost.likes;
  const userId = useSelector(state => state.user.userInfo.id);
  const createComment = () => {
    if (comment.trim().length > 5) {
      const post = { text: comment, autorId: userId, postId: mainPost._id };
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
    dispatch(addLike(userId, postId));
  };
  const dislike = (userId, postId) => {
    dispatch(addDislike(userId, postId));
  };

  useEffect(() => {
    dispatch(getContent());
  }, []);

  return (
    <>
      <View>
        <Card>
          <Card.Title>{mainPost.title}</Card.Title>
          <Card.Divider />
          <View>
            <Image
              style={styles.content}
              source={{
                uri: mainPost.content,
              }}
            />
          </View>
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
