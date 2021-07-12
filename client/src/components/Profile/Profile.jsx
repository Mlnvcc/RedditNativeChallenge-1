import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { signOut as signOutAC } from "../../redux/actions/user.ac";
import { editProfile } from "../../redux/actions/editProfile";
import Item from "../Item/Item";
import EditPhoto from "../editPhoto/EditPhoto";
import styles from "./style";

export default function UserProfileView() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [showEditForm, setshowEditForm] = useState({ status: false });
  const [post, setPost] = useState(false);
  const [avatarStatus, setAvatarStatus] = useState(false);
  const [updatePhoto, setUpdatePhoto] = useState();

  const username = useSelector(state => state.user.userInfo.userName);
  const uri = useSelector(state => state.user.userInfo.uri);
  const email = useSelector(state => state.user.userInfo.email);
  const userId = useSelector(state => state.user.userInfo.id);

  const [inputUsername, setInputUsername] = useState(username);
  const [inputEmail, setInputEmail] = useState(email);

  const signOutFunc = () => {
    dispatch(signOutAC());
  };

  const posts = useSelector(state => state.content.content);

  const autorPost = posts.filter(el => el.author._id == userId);

  const editProfileFunction = id => {
    if (inputUsername.trim() && inputEmail.trim()) {
      const user = {
        _id: userId,
        userName: inputUsername,
        email: inputEmail,
        uri: updatePhoto,
      };
      dispatch(editProfile(user));
      setshowEditForm(prev => !prev);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContent}>
          {uri ? (
            <Image
              style={styles.avatar}
              source={{
                uri: uri,
              }}
            />
          ) : (
            <Image
              style={styles.avatar}
              source={{
                uri: "https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-1-360x270.jpg",
              }}
            />
          )}

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
              {avatarStatus && (
                <EditPhoto
                  setUpdatePhoto={setUpdatePhoto}
                  updatePhoto={updatePhoto}
                />
              )}
              {updatePhoto && (
                <Image
                  source={{ uri: updatePhoto }}
                  style={{ width: 200, height: 200 }}
                />
              )}
              <TouchableOpacity
                style={[styles.buttonContainer, styles.updateButton]}
                onPress={() => setAvatarStatus(prev => !prev)}
              >
                <EditPhoto
                  setUpdatePhoto={setUpdatePhoto}
                  updatePhoto={updatePhoto}
                />
              </TouchableOpacity>
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
          <Icon size={30} name="rocket" color="#61dafb"></Icon>
          <Text style={styles.info}> Subscribes</Text>
        </View>
        <TouchableOpacity onPress={() => setPost(prev => !prev)}>
          <View style={styles.item}>
            <Icon size={30} name="inbox" color="#61dafb"></Icon>
            <Text style={styles.info}> Posts</Text>
          </View>
        </TouchableOpacity>
        {post ? (
          autorPost.length == 0 ? (
            <Text style={styles.userInfo}>You dont have any posts</Text>
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
        <TouchableOpacity
          onPress={() =>
            setshowEditForm(prev => ({
              status: !prev.status,
            }))
          }
        >
          <View style={styles.item}>
            <Icon size={30} name="edit" color="#61dafb"></Icon>
            <Text style={styles.info}> Edit profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={signOutFunc}>
          <View style={styles.item}>
            <Icon size={30} name="close" color="#61dafb"></Icon>
            <Text style={styles.info}> Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
