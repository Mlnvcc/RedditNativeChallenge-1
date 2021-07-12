import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import Item from "../Item/Item";
import { goToSubscribe, goToDisSubscribe } from "../../redux/actions/user.ac";
import styles from "./style";

export default function oneAutorPage({ route }) {
  const posts = useSelector(state => state.content.content);
  const [status, setStatus] = useState(
    !posts[0].author.subscribers.includes(userId)
  );

  const author = route.params.el;
  const userId = useSelector(state => state.user.userInfo.id);
  const navigation = useNavigation();

  const [post, setPost] = useState(false);
  const [subscribes, setSubscribes] = useState(author.subscribers.length);
  const dispatch = useDispatch();

  const disSubscribe = () => {
    const data = { autorId: author._id, userId: userId };
    dispatch(goToDisSubscribe(data));
    setSubscribes(prev => prev - 1);
    setStatus(prev => !prev);
  };
  const subscribe = () => {
    const data = { autorId: author._id, userId: userId };
    dispatch(goToSubscribe(data));
    setSubscribes(prev => prev + 1);
    setStatus(prev => !prev);
  };

  const autorPost = posts.filter(el => el.author._id == author._id);
  const likes = autorPost.reduce((a, b) => a + b.likes.length, 0);

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Image source={{ uri: author.uri }} style={styles.avatar} />
        <Text style={styles.name}> {author.userName}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <Icon size={30} name="heart" color="#61dafb"></Icon>
          <View style={styles.infoContent}>
            <Text style={styles.info}> Likes: {likes}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Icon size={30} name="users" color="#61dafb"></Icon>
          <Text style={styles.info}> Subscribers: {subscribes}</Text>
        </View>
        {status ? (
          <TouchableOpacity onPress={() => subscribe()}>
            <View style={styles.item}>
              <Icon size={30} name="check-circle-o" color="#61dafb"></Icon>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Subscribe on {author.userName}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => disSubscribe()}>
            <View style={styles.item}>
              <Icon size={30} name="times-circle-o" color="#61dafb"></Icon>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Unsubscribe {author.userName}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => setPost(prev => !prev)}>
          <View style={styles.item}>
            <Icon size={30} name="align-center" color="#61dafb"></Icon>
            <Text style={styles.info}> Posts</Text>
          </View>
        </TouchableOpacity>
        {post ? (
          autorPost.length == 0 ? (
            <Text>{author.userName} Dont have any posts</Text>
          ) : (
            <View style={styles.modal}>
              <FlatList
                style={{ height: 430 }}
                data={autorPost}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("OnePostPage", {
                        el: item,
                      });
                    }}
                  >
                    <Item el={item} />
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          )
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
}
