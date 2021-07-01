import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Card, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  addLike,
  addDislike,
  getContent,
  deletePost,
} from "../../redux/actions/content";
import { LikesContext } from "../../context/context";

export default function Item({ el }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userId = user.userInfo.id;
  const navigation = useNavigation();

  const { colorLike, setColorLike, colorDislike, setColorDislike } =
    useContext(LikesContext);
  const [visible, setVisible] = useState(false); // for overlay
  const toggleOverlay = () => {
    setVisible(!visible);
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

  const deletePostFunction = id => {
    dispatch(deletePost(id));
  };

  if (el.userName) return <></>;

  return (
    <Card containerStyle={styles.div}>
      {userId === el.author._id ? (
        <View>
          <View>
            <Overlay
              overlayStyle={styles.overlayContainer}
              isVisible={visible}
              onBackdropPress={toggleOverlay}
            >
              <TouchableOpacity
                style={styles.overlayOpacity}
                onPress={() => deletePostFunction(el._id)}
              >
                <Text style={styles.overlayText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditPost", { data: el });
                  setVisible(prev => !prev);
                }}
                style={styles.overlayOpacity}
              >
                <Text style={styles.overlayText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancleOpacity}>
                <Text
                  onPress={() => setVisible(prev => !prev)}
                  style={styles.overlayText}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </Overlay>
          </View>

          <View style={styles.header_post}>
            <Icon.Button
              name="ellipsis-v"
              backgroundColor="#9ca3af"
              onPress={toggleOverlay}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}
      <Card.Title style={styles.title1}>{el.title}</Card.Title>
      {el.uri ?
        <View>
          <View style={styles.imageTitle}>
            <Image
              source={{ uri: el.uri }}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <Card.Divider style={styles.hr} />
        </View>
        : <Text></Text>
      }

      {el.content ? (
        <>
          <Card.Image>
            <Text style={{ marginBottom: 10 }}>{el.content}</Text>
          </Card.Image>
        </>
      ) : (
        <View></View>
      )}

      <View style={styles.icons}>
        <Icon.Button
          color={colorLike ? "#61dafb" : "#f9fafb"}
          name="thumbs-up"
          backgroundColor="#1f2937"
          onPress={() => {
            like(userId, el._id);
            setColorLike(prev => {
              if (colorDislike) setColorDislike(prevD => !prevD);
              return !prev;
            });
          }}
        >
          <Text style={styles.text}> {el.likes.length}</Text>
        </Icon.Button>

        <Icon.Button
          color={colorDislike ? "#61dafb" : "#f9fafb"}
          name="thumbs-down"
          backgroundColor="#1f2937"
          onPress={() => {
            dislike(userId, el._id);
            setColorDislike(prev => {
              if (colorLike) setColorLike(prevL => !prevL);
              return !prev;
            });
          }}
        >
          <Text style={styles.text}>{el.dislikes.length}</Text>
        </Icon.Button>

        <Icon.Button
          name="comments"
          backgroundColor="#1f2937"
          onPress={() => navigation.navigate("OnePostPage", { el })}
        >
          <Text style={styles.text}>{el.comments.length}</Text>
        </Icon.Button>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DetailPage", {
            el: el.author,
          });
        }}
      >
        <Text style={styles.text}>Created by: {el.author.userName}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{el.date}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 200,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  overlayContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
    width: 270,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#61dafb",
  },

  overlayText: {
    margin: 3,
    fontSize: 25,
    color: "#f9fafb",
  },

  cancleOpacity: {
    backgroundColor: "#543333",
    margin: 1,
    width: 180,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#f9fafb",
  },

  overlayOpacity: {
    backgroundColor: "#1f2937",
    margin: 1,
    width: 180,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#f9fafb",
  },

  edit_button: {
    width: 30,
    height: 40,
    backgroundColor: "gray",
  },

  hr: {
    backgroundColor: "#61dafb",
    height: 1.3,
  },

  div: {
    width: 300,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#f9fafb",
    backgroundColor: "#1f2937",
  },

  header_post: {
    flexDirection: "column",
    alignSelf: "flex-end",
    height: 20,
    width: 17,
  },

  header_title: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 25,
    marginBottom: 8,
  },

  title1: {
    fontSize: 20,
    color: "#f9fafb",
  },

  text: {
    color: "#f9fafb",
  },

  imageTitle: {
    flexDirection: "column",
    alignItems: "center",
  },
});
