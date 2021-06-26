import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SignOut from "../Forms/SignOut/SignOut";

export default function UserProfileView() {
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

          <Text style={styles.name}>Big Floppa</Text>
          <Text style={styles.userInfo}>bigfloppa@mail.com</Text>
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
      </View>
          <SignOut style={styles.logout}/>
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
  logout: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:15,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent',
    position: 'absolute',
    bottom: 10,
  },
});
