import React, { useEffect, useState } from "react";
import { Card, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addLike, addDislike, getContent } from "../../redux/actions/content";
import { createComMain, createComToCom } from "../../redux/actions/comments";
import AddCommentMenu from "../AddCommentMenu/AddCommentMenu.jsx";
import AddReplyMenu from "../AddReplyMenu/AddReplyMenu";

export default function Post({ route }) {
  const dispatch = useDispatch();

  const [inputState, SetInputState] = useState(true);

  const mainId = route.params.el._id;

  const posts = useSelector(state => state.content);
  const mainPost = posts.filter(post => post._id == mainId)[0];
  // console.log("mainPost", mainPost);
  const comments = mainPost.comments;
  // console.log("COMMENTI", comments);
  const likes = mainPost.likes;
  const userId = useSelector(state => state.user.userInfo.id);

  const like = (userId, postId) => {
    dispatch(addLike(userId, postId));
  };
  const dislike = (userId, postId) => {
    dispatch(addDislike(userId, postId));
  };

  // useEffect(() => {
  //   dispatch(getContent());
  // }, []);

  return (
    <>
      <View>
        <Card>
          <Card.Title>{mainPost.title}</Card.Title>
          <Card.Divider />
          <Image
            style={styles.content}
            source={{
              uri: mainPost.content,
            }}
          />
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
              name="ellipsis-h"
              backgroundColor="gray"
              onPress={() => console.log("comment")}
            ></Icon.Button>
          </View>
        </Card>
      </View>

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
                    onPress={() => SetInputState(!inputState)}
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
                      {console.log("ITEM INSIDE ITEM", item)}
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
                {/* <Input
                  value={commentToComment}
                  onChangeText={text => setCommentToComment(text)}
                  placeholder="Comment"
                />
                <Button
                  onPress={() => {
                    createCommentToComment(item._id);
                  }}
                  title="Sub"
                /> */}
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
      {inputState ? (
        <AddCommentMenu userId={userId} postId={mainPost._id} />
      ) : (
        <AddReplyMenu userId={userId} postId={mainPost._id} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
