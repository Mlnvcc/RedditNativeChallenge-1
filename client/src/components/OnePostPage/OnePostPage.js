import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, Button, Input } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addLike,
  addDislike,
  addLikeComment,
  addDislikeComment,
} from "../../redux/actions/content";

import { createComMain, createComToCom } from "../../redux/actions/comments";
import AddCommentMenu from "../AddCommentMenu/AddCommentMenu.jsx";
import AddReplyMenu from "../AddReplyMenu/AddReplyMenu";

export default function Post({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [inputState, SetInputState] = useState({
    status: true,
    commentId: null,
  });

  const mainId = route.params.el._id;

  const posts = useSelector(state => state.content.content);
  const mainPost = posts.filter(post => post._id == mainId)[0];
  const comments = mainPost.comments;

  const likes = mainPost.likes;
  const userId = useSelector(state => state.user.userInfo.id);

  const [likeColor, setLikeColor] = useState(
    route.params.el.likes.includes(userId)
  );
  const [dislikeColor, setDislikeColor] = useState(
    route.params.el.dislikes.includes(userId)
  );

  const likeComment = (userId, commentId) => {
    dispatch(addLikeComment(userId, commentId));
  };
  const dislikeComment = (userId, commentId) => {
    dispatch(addDislikeComment(userId, commentId));
  };

  const like = (userId, postId) => {
    dispatch(addLike(userId, postId));
  };
  const dislike = (userId, postId) => {
    dispatch(addDislike(userId, postId));
  };

  useEffect(() => {
    setDislikeColor(mainPost.dislikes.includes(userId));
    setLikeColor(mainPost.likes.includes(userId));
  }, []);

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.div}>
        <Card.Title style={styles.title}>{mainPost.title}</Card.Title>
        <Card.Divider style={styles.hr} />
        <Card.Title style={styles.description}>
          {mainPost.description}
        </Card.Title>

        {mainPost.content ? (
          <Card.Image>
            <Text>{mainPost.content}</Text>
          </Card.Image>
        ) : (
          <></>
        )}

        {/* //   {mainPost.content ? (
      //   <Image source={{ uri: mainPost.content }} style={{ height: 200 }} />
      // ) : (
      //   <></>
      // )} */}

        <View style={styles.icons}>
          <Icon.Button
            color={likeColor ? "#61dafb" : "#f9fafb"}
            name="thumbs-up"
            backgroundColor="#1f2937"
            onPress={() => {
              like(userId, mainPost._id);
              setLikeColor(prev => {
                if (dislikeColor) setDislikeColor(prevD => !prevD);
                return !prev;
              });
            }}
          >
            <Text style={styles.text}>{mainPost.likes.length}</Text>
          </Icon.Button>
          <Icon.Button
            color={dislikeColor ? "#61dafb" : "#f9fafb"}
            name="thumbs-down"
            backgroundColor="#1f2937"
            onPress={() => {
              dislike(userId, mainPost._id);
              setDislikeColor(prev => {
                if (likeColor) setLikeColor(prevL => !prevL);
                return !prev;
              });
            }}
          >
            <Text style={styles.text}>{mainPost.dislikes.length}</Text>
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
      {
        comments.length ? (
          <>
            <FlatList
              data={comments}
              renderItem={({ item }) => (
                <View style={styles.mainDiv}>
                  <View style={styles.mainComment}>
                    <Text style={styles.titleComm}>{item.text}</Text>
                    <Card.Divider style={styles.hrCom} />
                    <View style={styles.icons}>
                      <Icon.Button
                        size={15}
                        name="thumbs-up"
                        color={"#f9fafb"}
                        backgroundColor="#1f2937"
                        onPress={() => likeComment(userId, item._id)}
                      >
                        <Text style={styles.text}>{item.likes.length}</Text>
                      </Icon.Button>

                      <Icon.Button
                        size={15}
                        name="thumbs-down"
                        color={"#f9fafb"}
                        backgroundColor="#1f2937"
                        onPress={() => dislikeComment(userId, item._id)}
                      >
                        <Text style={styles.text}>{item.dislikes.length}</Text>
                      </Icon.Button>

                      <TouchableOpacity
                        onPress={() =>
                          SetInputState({
                            status: !inputState,
                            commentId: item._id,
                          })
                        }
                      >
                        <Text style={styles.textAnswer}>Answer</Text>
                      </TouchableOpacity>
                    </View>

                    <Text style={styles.text}>
                      Created by: {item.creator.userName}
                    </Text>
                    <Text style={styles.text}>Created at: {item.date}</Text>
                  </View>

                  <FlatList
                    data={item.comments}
                    renderItem={({ item }) => (
                      <View style={styles.comOnComContainer}>
                        <Text style={styles.titleComm}>{item.text}</Text>
                        <Card.Divider style={styles.hrCom} />

                        <View style={styles.icons}>
                          <Icon.Button
                            size={15}
                            name="thumbs-up"
                            color={"#f9fafb"}
                            backgroundColor="#1f2937"
                            onPress={() => likeComment(userId, item._id)}
                          >
                            <Text style={styles.text}>{item.likes.length}</Text>
                          </Icon.Button>
                          <Icon.Button
                            size={15}
                            name="thumbs-down"
                            color={"#f9fafb"}
                            backgroundColor="#1f2937"
                            onPress={() => dislikeComment(userId, item._id)}
                          >
                            <Text style={styles.text}>
                              {item.dislikes.length}
                            </Text>
                          </Icon.Button>
                          <TouchableOpacity
                            onPress={() =>
                              SetInputState({
                                status: !inputState,
                                commentId: item._id,
                              })
                            }
                          >
                            <Text style={styles.textAnswer}>
                              Answer
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <View>
                          <Text style={styles.text}>
                            Created by: {item.creatorLogin}
                          </Text>

                          <Text style={styles.text}>Created at: {item.date}</Text>
                        </View>

                      </View>
                    )}
                  />
                </View>
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
        )
      }
      {console.log(767676, inputState)}
      {
        inputState.status ? (
          <AddCommentMenu userId={userId} postId={mainPost._id} />
        ) : (
          <AddReplyMenu
            userId={userId}
            postId={mainPost._id}
            fathercomment={inputState.commentId}
          />
        )
      }
    </View >
  );
}

const styles = StyleSheet.create({
  mainComment: {
    width: 300,
    flexDirection: "column",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#1f2937",
  },

  comOnComContainer: {
    width: 250,
    flexDirection: "column",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#1f2937",
  },

  mainDiv: {
    margin: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
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

  hrCom: {
    backgroundColor: "#61dafb",
    height: 0.5,
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

  textAnswer: {
    marginTop: 8,
    color: "#f9fafb",
  },

  titleComm: {
    marginBottom: 5,
    fontSize: 20,
    color: "#f9fafb",
  },

  icons: {
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "f9fafb",
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
