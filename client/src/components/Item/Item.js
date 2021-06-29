import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Card, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { addLike, addDislike, getContent } from "../../redux/actions/content";

export default function Item({ el }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userId = user.userInfo.id;
  const navigation = useNavigation();

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
  }, [dispatch]);

  return (
    <Card containerStyle={styles.div}>
      {userId === el.author ? (
        <View>
          <View>
            <Overlay
              overlayStyle={styles.overlayContainer}
              isVisible={visible}
              onBackdropPress={toggleOverlay}
            >
              <TouchableOpacity style={styles.overlayOpacity}>
                <Text style={styles.overlayText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.overlayOpacity}>
                <Text style={styles.overlayText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancleOpacity}>
                <Text
                  onPress={() => setVisible(prev => !prev)}
                  style={styles.overlayText}
                >
                  Cancle
                </Text>
              </TouchableOpacity>
            </Overlay>
          </View>

          <View style={styles.header_post}>
            <Icon.Button
              name="ellipsis-v"
              backgroundColor="#94a3b8"
              onPress={toggleOverlay}
            ></Icon.Button>
          </View>
        </View>
      ) : (
        <View></View>
      )}

      <Card.Title style={styles.title1}>{el.title}</Card.Title>
      <Card.Divider style={styles.hr} />

      {el.content ? (
        <Card.Image>
          <Text style={{ marginBottom: 10 }}>{el.content}</Text>
        </Card.Image>
      ) : (
        <View></View>
      )}

      <View style={styles.icons}>
        <Icon.Button
          name="thumbs-up"
          backgroundColor="#94a3b8"
          color="#e2e8f0"
          onPress={() => like(userId, el._id)}
        >
          <Text style={styles.text}> {el.likes.length}</Text>
        </Icon.Button>

        <Icon.Button
          name="thumbs-down"
          backgroundColor="#94a3b8"
          onPress={() => dislike(userId, el._id)}
        >
          <Text style={styles.text}>{el.dislikes.length}</Text>
        </Icon.Button>

        <Icon.Button
          name="comments"
          backgroundColor="#94a3b8"
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
  overlayContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e293b",
    width: 270,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#543333",
  },

  overlayText: {
    margin: 3,
    fontSize: 25,
    color: "#e2e8f0",
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
    borderColor: "#e2e8f0",
  },

  overlayOpacity: {
    backgroundColor: "#334155",
    margin: 1,
    width: 180,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e2e8f0",
  },

  edit_button: {
    width: 30,
    height: 40,
    backgroundColor: "gray",
  },

  hr: {
    backgroundColor: "#e2e8f0",
    height: 1.3,
  },

  div: {
    width: 300,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    backgroundColor: "#334155",
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
    color: "#e2e8f0",
  },
  text: {
    color: "#e2e8f0",
  },
});
