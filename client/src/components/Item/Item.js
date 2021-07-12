import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Card, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { addLike, addDislike, deletePost } from "../../redux/actions/content";
import styles from "./style";

export default function Item({ el }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  const userId = user.userInfo.id;
  const arrOfLikes = useSelector(state => el.likes);
  const arrOfDislikes = useSelector(state => el.dislikes);

  const [colorLike, setColorLike] = useState(arrOfLikes.includes(userId));
  const [colorDislike, setColorDislike] = useState(
    arrOfDislikes.includes(userId)
  );

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
    setColorLike(arrOfLikes.includes(userId));
    setColorDislike(arrOfDislikes.includes(userId));
  }, [el]);

  const deletePostFunction = id => {
    dispatch(deletePost(id));
  };

  if (el.userName) return <></>;

  return (
    <Card containerStyle={styles.div}>
      {userId === el?.author?._id || userId === el?.author ? (
        <View>
          <View>
            <Overlay
              overlayStyle={styles.overlayContainer}
              isVisible={visible}
              onBackdropPress={toggleOverlay}
            >
              <TouchableOpacity
                style={styles.overlayOpacity}
                onPress={() => {
                  deletePostFunction(el._id);
                  setVisible(prev => !prev);
                }}
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
      {el.uri ? (
        <View>
          <View style={styles.imageTitle}>
            <Image
              source={{ uri: el.uri }}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <Card.Divider style={styles.hr} />
        </View>
      ) : (
        <Text></Text>
      )}

      {el.content ? (
        <>
          <Image source={{ uri: el.content }} style={{ height: 200 }} />
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
        <Text style={styles.text}>Created by: {el.author?.userName ?? ""}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{el.date}</Text>
    </Card>
  );
}
