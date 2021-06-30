import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut as signOutAC } from "../../redux/actions/user.ac";
import { editProfile } from "../../redux/actions/editProfile";
import Item from "../Item/Item";
import { useNavigation } from "@react-navigation/native";

export default function UserProfileView() {
  const navigation = useNavigation();
  const [showEditForm, setshowEditForm] = useState({ status: false });
  const [post, setPost] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.userInfo.userName);
  const email = useSelector(state => state.user.userInfo.email);
  const userId = useSelector(state => state.user.userInfo.id);
  const [inputUsername, setInputUsername] = useState(username);
  const [inputEmail, setInputEmail] = useState(email);

  const signOutFunc = () => {
    dispatch(signOutAC());
  };
  const posts = useSelector(state => state.content);
  const autorPost = posts.filter(el => el.author == userId);

  const editProfileFunction = id => {
    if (inputUsername.trim() && inputEmail.trim()) {
      const user = {
        _id: userId,
        userName: inputUsername,
        email: inputEmail,
      };
      dispatch(editProfile(user));
      setshowEditForm(prev => !prev);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://cdn.frankerfacez.com/avatar/twitch/80339713",
            }}
          />

          {showEditForm.status ? (
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <TextInput
                  onChangeText={text => setInputUsername(text)}
                  style={styles.inputs}
                  value={inputUsername}
                  placeholder="New username"
                  underlineColorAndroid="transparent"
                />
                <Image
                  style={styles.inputIcon}
                  source={{
                    uri: "https://img.icons8.com/nolan/40/000000/email.png",
                  }}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  onChangeText={text => setInputEmail(text)}
                  style={styles.inputs}
                  value={inputEmail}
                  placeholder="New email"
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                />
                <Image
                  style={styles.inputIcon}
                  source={{
                    uri: "https://img.icons8.com/nolan/40/000000/key.png",
                  }}
                />
              </View>
              <TouchableOpacity
                style={[styles.buttonContainer, styles.updateButton]}
                onPress={() => editProfileFunction(userId)}
              >
                <Text style={styles.updateText}>Update</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <Text style={styles.name}>{username}</Text>
              <Text style={styles.userInfo}>{email}</Text>
            </>
          )}
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/70/000000/filled-like.png",
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Subscribes</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setPost(prev => !prev)}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/color/70/000000/facebook-like.png",
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Post</Text>
            </View>
          </View>
        </TouchableOpacity>
        {post ? (
          autorPost.length == 0 ? (
            <Text>y vas nety postov</Text>
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
        <TouchableOpacity
          onPress={() =>
            setshowEditForm(prev => ({
              status: !prev.status,
            }))
          }
        >
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/color/70/000000/administrator-male.png",
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Edit</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={signOutFunc}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/color/70/000000/shutdown.png",
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Logout</Text>
            </View>
          </View>
        </TouchableOpacity>
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
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
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
    backgroundColor: "#DCDCDC",
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
