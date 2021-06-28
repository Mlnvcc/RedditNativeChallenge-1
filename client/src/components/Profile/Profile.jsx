import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../redux/reduce/editProfileReducer";
import { signOut as signOutAC } from "../../redux/actions/user.ac";
import EditProfileForm from "../EditProfile/EditProfile";

export default function UserProfileView() {
  const [showEditForm, setshowEditForm ] = useState({status: false, id: null})
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.userInfo.userName);
  const email = useSelector(state => state.user.userInfo.email);

  // const editProfileFunction = (id, e) => {
  //   e.preventDefault();
  //   const dataInput = e.target.inputId.value;
  //   dispatch(editProfile(id, dataInput));
  //   setshowEditForm((prev) => !prev);
  // };

  const signOutFunc = () => {
    dispatch(signOutAC());
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
            <EditProfileForm props={[showEditForm, setshowEditForm]}/>
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
            <Text style={styles.info}>News</Text>
          </View>
        </View>

        <TouchableOpacity
        onPress={() =>
          setshowEditForm((prev) => {
            return { status: !prev.status, id };
          })
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
});
