import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import Item from "../Item/Item";
import { useNavigation } from "@react-navigation/native";
import { goToSubscribe, goToDisSubscribe } from "../../redux/actions/user.ac";

export default function oneAutorPage({ route }) {
  const author = route.params.el;
  console.log("author", author);
  const userId = useSelector(state => state.user.userInfo.id);
  const navigation = useNavigation();

  const [post, setPost] = useState(false);
  const [subscribes, setSubscribes] = useState(author.subscribers.length);
  const dispatch = useDispatch();

  const disSubscribe = () => {
    const data = { autorId: author._id, userId: userId };
    dispatch(goToDisSubscribe(data));
    setSubscribes(prev => prev - 1);
  };
  const subscribe = () => {
    const data = { autorId: author._id, userId: userId };
    dispatch(goToSubscribe(data));
    setSubscribes(prev => prev + 1);
  };

  const posts = useSelector(state => state.content);
  const autorPost = posts.filter(el => el.author._id == author._id);
  const likes = autorPost.reduce((a, b) => a + b.likes.length, 0);

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://cdn.frankerfacez.com/avatar/twitch/80339713",
          }}
        />
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

        <TouchableOpacity onPress={() => subscribe()}>
          <View style={styles.item}>
            <Icon size={30} name="check-circle-o" color="#61dafb"></Icon>
            <Text style={styles.info}> Subscribe on {author.userName}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => disSubscribe()}>
          <View style={styles.item}>
            <Icon size={30} name="times-circle-o" color="#61dafb"></Icon>
            <Text style={styles.info}> Unsubscribe {author.userName}</Text>
          </View>
        </TouchableOpacity>

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

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#61dafb",
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    color: "#f9fafb",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    height: 500,
    flexDirection: "column",
  },
  item: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  updateButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  updateText: {
    color: "white",
  },
  modal: {
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#3949ab",
    height: 300,
    width: 400,
  },
});
