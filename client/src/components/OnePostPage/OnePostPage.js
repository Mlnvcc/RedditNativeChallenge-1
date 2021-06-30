import React, { useEffect, useState } from "react";
import { Card, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addLike, addDislike, getContent } from "../../redux/actions/content";
import { createComMain, createComToCom } from "../../redux/actions/comments";
import { useNavigation } from "@react-navigation/native";
import AddCommentMenu from "../AddCommentMenu/AddCommentMenu.jsx";

export default function Post({ route }) {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const mainId = route.params.el._id;

  const posts = useSelector(state => state.content);
  const mainPost = posts.filter(post => post._id == mainId)[0];
  const comments = mainPost.comments;
  const likes = mainPost.likes;
  const userId = useSelector(state => state.user.userInfo.id);

  const [commentToComment, setCommentToComment] = useState();
  const createCommentToComment = commentId => {
    if (commentToComment.trim().length > 5) {
      const comment = {
        text: commentToComment,
        autorId: userId,
        commentId,
        mainId: mainId,
        postId: mainPost._id,
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
    <View style={styles.container}>
      <Card containerStyle={styles.div}>
        <Card.Title style={styles.title}>{mainPost.title}</Card.Title>
        <Card.Divider style={styles.hr} />
        <Card.Title style={styles.description}>
          {mainPost.description}
        </Card.Title>

        {mainPost.content ?
          <Card.Image>
            <Text>{mainPost.content}</Text>
          </Card.Image>
          : <></>
        }

        <View style={styles.icons}>
          <Icon.Button
            name="thumbs-up"
            backgroundColor="#9ca3af"
            onPress={() => like(userId, mainPost._id)}
          >
            {likes.length}
          </Icon.Button>
          <Icon.Button
            name="thumbs-down"
            backgroundColor="#9ca3af"
            onPress={() => dislike(userId, mainPost._id)}
          >
            {mainPost.dislikes.length}
          </Icon.Button>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailPage", {
              el: mainPost.author,
            });
          }}
        >
          <Text style={styles.text}>
            Created by: {mainPost.author.userName}
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>{mainPost.date}</Text>
      </Card>

      {/* <Text style={{ alignItems: "center", justifyContent: "center" }}>
        tuta
      </Text> */}
      {comments.length ? (
        <>
          <FlatList
            data={comments}
            renderItem={({ item }) => (
              <Card style={{ height: 30 }}>
                {console.log(item)}
                <Card.Image /*source={"ASd"}*/>
                  <Text style={{ marginBottom: 10 }}>{item.text}</Text>
                </Card.Image>

                <View style={styles.icons}>
                  <Icon.Button
                    name="thumbs-up"
                    thumbs-down
                    backgroundColor="gray"
                  // onPress={() => likeComment(userId, item._id)}
                  >
                    {item.likes.length}
                  </Icon.Button>
                  <Icon.Button
                    name="thumbs-down"
                    backgroundColor="gray"
                  // onPress={() => dislikeComment(userId, item._id)}
                  >
                    {item.dislikes.length}
                  </Icon.Button>
                  <Icon.Button
                    name="comments"
                    backgroundColor="gray"
                    onPress={() => console.log("comment")}
                  >
                    {item.comments.length}
                  </Icon.Button>
                  <Icon.Button
                    name="ellipsis-h"
                    backgroundColor="gray"
                    onPress={() => console.log("comment")}
                  ></Icon.Button>
                </View>
                <Text style={{ marginBottom: 1 }}>{item.date}</Text>
                <FlatList
                  data={item.comments}
                  renderItem={({ item }) => (
                    <>
                      {console.log(item)}
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
                  placeholder="Comment"
                />
                <Button
                  onPress={() => {
                    createCommentToComment(item._id);
                  }}
                  title="Sub"
                />
              </Card>
            )}
            keyExtractor={item => item.id}
          />

          {/* <Input
            value={comment}
            onChangeText={text => setComment(text)}
            placeholder="Текст комментария"
            />
            <Button
            onPress={() => {
              createComment();
            }}
            title="Отправить комментарий"
          /> */}
        </>
      ) : (
        <></>
      )}
      <AddCommentMenu userId={userId} postId={mainPost._id} />
    </View>
  );
}

const styles = StyleSheet.create({
  //post container
  div: {
    width: 400,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#1f2937",
  },
  // all data
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    fontSize: 13,
    backgroundColor: "#111827",
    height: 200,
  },

  hr: {
    backgroundColor: "#61dafb",
    height: 1.3,
  },

  title: {
    fontSize: 25,
    color: "#f9fafb",
  },

  description: {
    color: "#f9fafb",
    fontSize: 20,
  },

  text: {
    color: "#f9fafb",
  },

  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    // width: 270,
    height: 200,
    // borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
});
